/* eslint-disable */
// Cobalt Sprite — Originkit

"use client"

import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"

/* ------------------------------------------------------------------ *
 *  MarbleSprite
 *  A sky-blue sprite with two pill eyes, sealed in a thick glass
 *  capsule: the upper half crystal clear, the lower half frosted, the
 *  two halves meeting at a tilted seam whose glass lip reads as a
 *  banded ellipse. The sprite turns to look at the cursor and blinks;
 *  the capsule leans toward it while the studio highlights stay put.
 *
 *  Built after a still render of a blue character in a glass capsule
 *  on black (no source code, so this is a match to the picture, not a
 *  port). Every default below was measured off that image, in units
 *  of the shell's radius (383px in a 1080px frame):
 *
 *    shell      centre of frame, diameter 0.709 of the shorter side
 *    sprite     concentric, r 0.593
 *    seam       plane normal (0.516, 0.736, 0.438), offset -0.04 -
 *               fitted to 20 points on the lip, the lower arc in
 *               front of the sprite and the upper arc behind it
 *    face       looking 12.4deg right, 10.1deg up, rolled -10deg;
 *               the pills sit 22.5deg either side of that axis
 *    highlights five studio reflections on the dome at r 0.83-0.89,
 *               from 93deg round to 33deg, each stretched along the rim
 *
 *  One fragment shader, ray traced per pixel, orthographic:
 *
 *    1. the shell refracts (n 1.5) twice. For a concentric shell a
 *       ray's distance from the centre is invariant, so the sprite
 *       keeps its true size, and every ray beyond the inner radius is
 *       totally internally reflected - that is the bright band inside
 *       the silhouette, not a painted rim
 *    2. the studio is stored as a mirror-ball map: a reflected
 *       direction R is drawn at normalize(R + view).xy, which is the
 *       exact spot a front-surface reflection of R lands on a unit
 *       sphere. So the measured highlight shapes are painted straight
 *       into it, and every other surface (the sprite, the inside of
 *       the back wall, the tilted capsule) samples the same studio
 *    3. the frosted half scatters: what is behind it is blurred to a
 *       soft blue glow, and it brightens with the path length through
 *       it toward the silhouette, most on the side the key light hits
 *    4. the seam lip is an annulus on the cut plane, its edges drawn
 *       as glass lines a constant number of pixels wide
 *    5. the sprite is satin: a wrapped diffuse, a broad sheen from the
 *       big top-right softbox, and the studio blurred by its roughness.
 *       The pills are raised half-cylinders bent onto its surface.
 * ------------------------------------------------------------------ */

/* ----------------------------------------------------------- defaults */

const DEFAULTS = {
    face: "eyes" as const,
    background: "#000000",
    scale: 90,
    spriteColor: "#1400F6",
    frost: 5,
    follow: "frame" as const,
    reach: 10,
    lean: 10,
    blink: 10,
    float: 15,
}

const DEFAULT_ADVANCED = {
    /** Where the sprite looks with no cursor - the reference's own gaze */
    restX: 12,
    restY: 10,
    /** Roll of the face about its own axis; negative is clockwise */
    roll: -10,
    /** Hard limit on how far it turns toward the cursor */
    maxTurn: 38,
    /** Direction the seam plane faces, in the picture plane (0 = right, 90 = up) */
    seamAngle: 55,
    /** How far the seam plane is turned away from facing the camera */
    seamTilt: 64,
    /** Seam plane's distance from the centre, % of the shell radius; negative is toward the frosted half */
    seamOffset: -5,
    /** Shell wall, % of its radius */
    shell: 4.5,
    /** How far the seam's lip reaches in past the wall, % of the radius */
    lip: 6,
    /** Sprite radius, % of the shell's */
    spriteSize: 59.3,
    /** Angle between the pills, seen from the sprite's centre */
    eyeGap: 45,
    eyeLength: 34,
    eyeWidth: 10,
    eyeColor: "#F3F2F8",
    lightAngle: 0,
    gloss: 100,
    glow: 100,
    grain: 100,
    followMs: 90,
    blinkMs: 150,
}

type Advanced = typeof DEFAULT_ADVANCED

/* -------------------------------------------------------------- types */

export interface MarbleSpriteProps {
    /** Whether the sprite wears its pill eyes */
    face?: "eyes" | "none"
    /** Sits behind the capsule; the glass shows it through the clear half */
    background?: string
    /** Size of the capsule, in % of the reference's framing (100 = 71% of the frame's shorter side) */
    scale?: number
    /** Mid tone of the sprite; its lit and shadow sides are derived from it */
    spriteColor?: string
    /** 0-10 how milky the lower half of the capsule is; 0 is clear glass all round */
    frost?: number
    /** Follow the cursor anywhere on the page, only over the frame, or never */
    follow?: "page" | "frame" | "off"
    /** 0-10 how hard the sprite turns to look at the cursor */
    reach?: number
    /** 0-10 how far the capsule leans toward the cursor */
    lean?: number
    /** 0-10 how often it blinks; 0 never */
    blink?: number
    /** 0-10 slow bob and sway of the whole capsule */
    float?: number
    /** Tuning constants behind the look */
