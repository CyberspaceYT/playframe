"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Maximize2, Minimize2, Download, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Game } from "@/lib/games"

interface GamePlayerProps {
  game: Game
  onClose: () => void
}

export function GamePlayer({ game, onClose }: GamePlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
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
      // Try to get save from iframe
      try {
        const iframeWindow = iframeRef.current?.contentWindow
        if (iframeWindow) {
          const iframeSave = iframeWindow.localStorage.getItem("gameData") || iframeWindow.localStorage.getItem("save") || iframeWindow.localStorage.getItem("saveData")
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
          // Try to inject into iframe
          try {
            const iframeWindow = iframeRef.current?.contentWindow
            if (iframeWindow) {
              iframeWindow.localStorage.setItem("gameData", saveData)
              iframeWindow.localStorage.setItem("save", saveData)
              iframeWindow.localStorage.setItem("saveData", saveData)
              iframeWindow.location.reload()
            }
          } catch {
            // Cross-origin restrictions - just reload iframe
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

  return (
    <motion.div
      className="fixed inset-0 bg-[#1A0808]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-5xl aspect-video bg-[#2A1212] rounded-xl overflow-hidden border-2 border-[#4A1010]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <iframe
          ref={iframeRef}
          src={game.htmlFile}
          className="w-full h-full"
          title={game.title}
        />

        {/* Control Bar */}
        <motion.div
          className="absolute top-4 right-4 flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Save/Load buttons */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={handleDownloadSave}
              disabled={!game.hasSaveSystem}
              className={`
                border-2 transition-all duration-300
                ${game.hasSaveSystem
                  ? "bg-[#2A1212] border-[#D64545] text-[#F5A962] hover:bg-[#4A1010] hover:border-[#F5A962]"
                  : "bg-[#2A1212]/50 border-[#4A1010] text-[#4A1010] cursor-not-allowed"
                }
              `}
              title={game.hasSaveSystem ? "Download Save" : "No save system"}
            >
              <Download className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={handleUploadSave}
              disabled={!game.hasSaveSystem}
              className={`
                border-2 transition-all duration-300
                ${game.hasSaveSystem
                  ? "bg-[#2A1212] border-[#D64545] text-[#F5A962] hover:bg-[#4A1010] hover:border-[#F5A962]"
                  : "bg-[#2A1212]/50 border-[#4A1010] text-[#4A1010] cursor-not-allowed"
                }
              `}
              title={game.hasSaveSystem ? "Upload Save" : "No save system"}
            >
              <Upload className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleFullscreen}
              className="bg-[#2A1212] border-2 border-[#D64545] text-[#F5A962] hover:bg-[#4A1010] hover:border-[#F5A962] transition-all duration-300"
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, rotate: 90 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={onClose}
              className="bg-[#2A1212] border-2 border-[#8B1A1A] text-[#E07B5A] hover:bg-[#8B1A1A] hover:text-[#F5D6BA] transition-all duration-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Game title badge */}
        <motion.div
          className="absolute top-4 left-4 bg-[#2A1212]/90 border-2 border-[#4A1010] rounded-lg px-3 py-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#F5A962] font-medium text-sm">{game.title}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
