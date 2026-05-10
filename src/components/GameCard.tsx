"use client"

import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"
import type { Game } from "@/lib/games"
import Image from "next/image"

interface GameCardProps {
  game: Game
  index: number
  onPlay: (game: Game) => void
}

export function GameCard({ game, index, onPlay }: GameCardProps) {
  const isComingSoon = game.isComingSoon

  return (
    <motion.div
      className={`
        relative group cursor-pointer overflow-hidden rounded-xl border-2 
        transition-colors duration-300
        ${isComingSoon 
          ? "bg-[#F5F5F5] border-[#E07B5A]/30 cursor-not-allowed" 
          : "bg-white border-[#E07B5A] hover:border-[#D64545] shadow-md hover:shadow-lg"
        }
      `}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.03,
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
      whileHover={!isComingSoon ? { 
        scale: 1.03, 
        y: -5,
        boxShadow: "0 20px 40px rgba(214, 69, 69, 0.2)"
      } : undefined}
      whileTap={!isComingSoon ? { scale: 0.98 } : undefined}
      onClick={() => !isComingSoon && onPlay(game)}
    >
      {/* Glow effect on hover */}
      {!isComingSoon && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#D64545]/0 to-[#F5A962]/0 group-hover:from-[#D64545]/5 group-hover:to-[#F5A962]/5 transition-all duration-500"
        />
      )}
      
      {/* Icon area */}
      <div className={`
        aspect-square flex items-center justify-center p-4 overflow-hidden
        ${isComingSoon ? "bg-[#F5D6BA]/30" : "bg-[#F5D6BA]/50"}
      `}>
        {game.icon ? (
          <motion.div
            className="w-full h-full flex items-center justify-center relative"
            whileHover={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={game.icon}
              alt={game.title}
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </motion.div>
        ) : (
          <motion.div 
            className="w-20 h-20 bg-[#F5D6BA] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#E07B5A]"
            animate={isComingSoon ? { 
              borderColor: ["#E07B5A", "#D64545", "#E07B5A"],
            } : undefined}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-[#8B1A1A] text-3xl">?</span>
          </motion.div>
        )}
      </div>
      
      {/* Info area */}
      <div className="p-4 space-y-2">
        <motion.h3 
          className={`
            font-bold text-lg truncate
            ${isComingSoon ? "text-[#E07B5A]" : "text-[#8B1A1A]"}
          `}
          animate={isComingSoon ? { opacity: [0.5, 0.8, 0.5] } : undefined}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {game.title}
        </motion.h3>
        <p className={`
          text-sm line-clamp-2
          ${isComingSoon ? "text-[#E07B5A]/60" : "text-[#8B1A1A]/70"}
        `}>
          {game.description}
        </p>
        
        {!isComingSoon && (
          <motion.div 
            className="flex items-center gap-2 pt-2 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs px-2 py-1 bg-[#F5A962] text-white rounded-full capitalize">
              {game.category}
            </span>
            {game.hasSaveSystem && (
              <span className="text-xs px-2 py-1 bg-[#D64545] text-white rounded-full">
                Saves
              </span>
            )}
          </motion.div>
        )}
      </div>
      
      {/* Play overlay for non-coming-soon games */}
      {!isComingSoon && (
        <motion.div 
          className="absolute inset-0 bg-[#1A0808]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.div
            className="bg-[#D64545] text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(214, 69, 69, 0.5)",
                "0 0 40px rgba(214, 69, 69, 0.8)",
                "0 0 20px rgba(214, 69, 69, 0.5)"
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            PLAY!
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}
