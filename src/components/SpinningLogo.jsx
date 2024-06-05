'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiHtml5,
  SiJquery,
  SiTailwindcss,
  SiLinux,
  SiMysql,
  SiPostgresql,
  SiNpm,
  SiWebpack,
  SiGooglecloud,
} from 'react-icons/si'
import { useWindowSize } from './useWindowSize'

const SpinningLogos = () => {
  const { width } = useWindowSize()

  const [sizes, setSizes] = useState({
    radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
    iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
    ringPadding: RING_PADDING.lg,
    logoFontSize: LOGO_FONT_SIZE.lg,
  })

  useEffect(() => {
    if (!width) return

    if (width < BREAKPOINTS.sm) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.sm,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.sm,
        ringPadding: RING_PADDING.sm,
        logoFontSize: LOGO_FONT_SIZE.sm,
      })
    } else if (width < BREAKPOINTS.md) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.md,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.md,
        ringPadding: RING_PADDING.md,
        logoFontSize: LOGO_FONT_SIZE.md,
      })
    } else {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
        ringPadding: RING_PADDING.lg,
        logoFontSize: LOGO_FONT_SIZE.lg,
      })
    }
  }, [width])

  return (
    <div
      style={{
        width:
          sizes.radiusToCenterOfIcons +
          sizes.iconWrapperWidth +
          sizes.ringPadding,
        height:
          sizes.radiusToCenterOfIcons +
          sizes.iconWrapperWidth +
          sizes.ringPadding,
      }}
      className="grid place-content-center rounded-full bg-neutral-100 shadow-inner"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={TRANSITION}
        style={{
          width:
            sizes.radiusToCenterOfIcons -
            sizes.iconWrapperWidth -
            sizes.ringPadding,
          height:
            sizes.radiusToCenterOfIcons -
            sizes.iconWrapperWidth -
            sizes.ringPadding,
        }}
        className="relative grid place-items-center rounded-full bg-white shadow dark:bg-zinc-900"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={TRANSITION}
          className="text-lg font-bold uppercase text-neutral-900 sm:text-xl md:text-3xl dark:text-white"
        >
          tech stack
        </motion.div>
        {ICON_DATA.map((icon, idx) => {
          const degrees = (360 / ICON_DATA.length) * idx
          return (
            <motion.div
              key={idx}
              style={{
                marginTop:
                  sizes.radiusToCenterOfIcons *
                  Math.sin(degreesToRadians(degrees)),
                marginLeft:
                  sizes.radiusToCenterOfIcons *
                  Math.cos(degreesToRadians(degrees)),
                width: sizes.iconWrapperWidth,
                height: sizes.iconWrapperWidth,
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={TRANSITION}
              className={`absolute grid place-content-center rounded-full shadow-lg ${icon.className}`}
            >
              <icon.Icon style={{ fontSize: sizes.logoFontSize }} />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180)
}

const ICON_DATA = [
  { Icon: SiJavascript, className: 'bg-[#F7DF1E] text-white' },
  { Icon: SiReact, className: 'bg-[#61DAFB] text-white' },
  { Icon: SiExpress, className: 'bg-[#000000] text-white' },
  { Icon: SiGit, className: 'bg-[#F05032] text-white' },
  { Icon: SiGithub, className: 'bg-[#181717] text-white' },
  { Icon: SiMongodb, className: 'bg-[#47A248] text-white' },
  { Icon: SiHtml5, className: 'bg-[#E34F26] text-white' },
  { Icon: SiJquery, className: 'bg-[#0769AD] text-white' },
  { Icon: SiTailwindcss, className: 'bg-[#06B6D4] text-white' },
  { Icon: SiLinux, className: 'bg-[#FCC624] text-white' },
  { Icon: SiMysql, className: 'bg-[#4479A1] text-white' },
  { Icon: SiPostgresql, className: 'bg-[#336791] text-white' },
  { Icon: SiNpm, className: 'bg-[#CB3837] text-white' },
  { Icon: SiWebpack, className: 'bg-[#8DD6F9] text-white' },
  { Icon: SiGooglecloud, className: 'bg-[#4285F4] text-white' },
]

const RADIUS_TO_CENTER_OF_ICONS = {
  sm: 200,
  md: 325,
  lg: 425,
}
const ICON_WRAPPER_WIDTH = {
  sm: 40,
  md: 65,
  lg: 80,
}
const RING_PADDING = {
  sm: 4,
  md: 8,
  lg: 12,
}
const LOGO_FONT_SIZE = {
  sm: 18,
  md: 24,
  lg: 36,
}
const BREAKPOINTS = {
  sm: 480,
  md: 768,
}
const TRANSITION = {
  repeat: Infinity,
  repeatType: 'loop',
  duration: 50,
  ease: 'linear',
}

export { SpinningLogos }
