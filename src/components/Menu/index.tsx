import React, { useRef, useEffect, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { Nav } from './styles'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const Menu: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setOpen(isOpen)
      }, 1000)
    } else {
      setOpen(isOpen)
    }
  }, [isOpen])

  return (
    <Nav
      style={{
        position: isOpen ? 'inherit' : 'absolute'
      }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </Nav>
  )
}

export default Menu
