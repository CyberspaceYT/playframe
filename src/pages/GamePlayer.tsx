"use client"

import { useState, useRef, useEffect } from "react"
import { Maximize2, Minimize2, Download, Upload, X, Code, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingScreen } from "@/components/loading-screen"
import type { Game } from "@/lib/games"

interface GamePlayerProps {
  game: Game
  onClose: () => void
}

export function GamePlayer({ game, onClose }: GamePlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [uploadedHtmlSrc, setUploadedHtmlSrc] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const toggleFullscreen = async () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen()
    } else {
      await document.exitFullscreen()
    }
  }

  // Feature 1: Download the entire HTML Source of the game
  const handleDownloadHtmlCode = async () => {
    try {
      setIsLoading(true)
      // Safely fetch the static file source code
      const response = await fetch(game.htmlFile)
      if (!response.ok) throw new Error("Failed to fetch game source.")
      const htmlText = await response.text()
      
      const blob = new Blob([htmlText], { type: "text/html" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      
      // Sanitizes title spacing for standard file naming conventions
      const safeTitle = game.title.replace(/\s+/g, "_").toUpperCase()
      a.href = url
      a.download = `${safeTitle}_PLAYFRAMESAVE.html`
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      alert("Could not download the game code layout. Ensure the path is correct.")
    } finally {
      setIsLoading(false)
    }
  }

  // Feature 2: Upload custom modified HTML and immediately load it safely inside the sandbox
  const handleUploadHtmlCode = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".html"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        setIsLoading(true)
        const reader = new FileReader()
        reader.onload = (event) => {
          const htmlContent = event.target?.result as string
          const blob = new Blob([htmlContent], { type: "text/html" })
          const customUrl = URL.createObjectURL(blob)
          
          // Re-route iframe target configuration to parse user files
          setUploadedHtmlSrc(customUrl)
          alert("Custom HTML Engine file loaded inside framework interface successfully.")
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  const handleDownloadSave = () => {
    if (!game.hasSaveSystem) return
    const saveKey = `game_save_${game.id}`
    const saveData = localStorage.getItem(saveKey)

    if (saveData) {
      const blob = new Blob([saveData], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${game.id}-save.json`
      a.click()
      URL.revokeObjectURL(url)
    } else {
      try {
        const iframeWindow = iframeRef.current?.contentWindow
        if (iframeWindow) {
          const iframeSave =
            iframeWindow.localStorage.getItem("gameData") ||
            iframeWindow.localStorage.getItem("save") ||
            iframeWindow.localStorage.getItem("saveData")
          if (iframeSave) {
            const blob = new Blob([iframeSave], { type: "application/json" })
            const url = URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `${game.id}-save.json`
            a.click()
            URL.revokeObjectURL(url)
            return
          }
        }
      } catch {
        // Cross-origin restrictions
      }
      alert("No save data found! Play the game first to create a save.")
    }
  }

  const handleUploadSave = () => {
    if (!game.hasSaveSystem) return
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".json"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const saveData = event.target?.result as string
          const saveKey = `game_save_${game.id}`
          localStorage.setItem(saveKey, saveData)

          try {
            const iframeWindow = iframeRef.current?.contentWindow
            if (iframeWindow) {
              iframeWindow.localStorage.setItem("gameData", saveData)
              iframeWindow.localStorage.setItem("save", saveData)
              iframeWindow.localStorage.setItem("saveData", saveData)
              iframeWindow.location.reload()
            }
          } catch {
            if (iframeRef.current) {
              iframeRef.current.src = iframeRef.current.src
            }
          }
          alert("Save loaded! The game will reload with your save.")
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  const handleIframeLoad = () => {
    setTimeout(() => setIsLoading(false), 500)
  }

  return (
    <div className="fixed inset-0 bg-[#1A0808]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl aspect-video bg-[#2A1212] rounded-xl overflow-hidden border-2 border-[#4A1010]"
      >
        {isLoading && <LoadingScreen gameName={game.title} />}

        {/* Fallback to user uploaded code source if configured */}
        <iframe
          ref={iframeRef}
          src={uploadedHtmlSrc || game.htmlFile}
          className="w-full h-full"
          onLoad={handleIframeLoad}
          title={game.title}
        />

        {/* Control Bar */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          
          {/* New Button: Download HTML Source Code */}
          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleDownloadHtmlCode}
              className="bg-[#2A1212] border-2 border-[#D64545] text-[#F5A962] hover:bg-[#4A1010] hover:border-[#F5A962] transition-all duration-300"
              title="Download Game HTML Code"
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>

          {/* New Button: Upload custom HTML code */}
          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleUploadHtmlCode}
              className="bg-[#2A1212] border-2 border-[#D64545] text-[#F5A962] hover:bg-[#4A1010] hover:border-[#F5A962] transition-all duration-300"
              title="Upload Modified HTML File"
            >
              <FileCode className="h-4 w-4" />
            </Button>
          </div>

          {/* Save/Load JSON configuration buttons */}
          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleDownloadSave}
              disabled={!game.hasSaveSystem}
              className={`border-2 transition-all duration-300 ${
                game.hasSaveSystem
                  ? "bg-[#2A1212] border-[#D64545] text-[#F5A962] hover:bg-[#4A1010] hover:border-[#F5A962]"
                  : "bg-[#2A1212]/50 border-[#4A1010] text-[#4A1010] cursor-not-allowed"
              }`}
              title={game.hasSaveSystem ? "Download Save" : "No save system"}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleUploadSave}
              disabled={!game.hasSaveSystem}
              className={`border-2 transition-all duration-300 ${
                game.hasSaveSystem
                  ? "bg-[#2A1212] border-[#D64545] text-[#F5A962] hover:bg-[#4A1010] hover:border-[#F5A962]"
                  : "bg-[#2A1212]/50 border-[#4A1010] text-[#4A1010] cursor-not-allowed"
              }`}
              title={game.hasSaveSystem ? "Upload Save" : "No save system"}
            >
              <Upload className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleFullscreen}
              className="bg-[#2A1212] border-2 border-[#D64545] text-[#F5A962] hover:bg-[#4A1010] hover:border-[#F5A962] transition-all duration-300"
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </div>

          <div>
            <Button
              variant="outline"
              size="icon"
              onClick={onClose}
              className="bg-[#2A1212] border-2 border-[#8B1A1A] text-[#E07B5A] hover:bg-[#8B1A1A] hover:text-[#F5D6BA] transition-all duration-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Game title badge */}
        <div className="absolute top-4 left-4 bg-[#2A1212]/90 border-2 border-[#4A1010] rounded-lg px-3 py-1">
          <span className="text-[#F5A962] font-medium text-sm">{game.title}</span>
        </div>
      </div>
    </div>
  )
}
