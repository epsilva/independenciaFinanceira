import React, { useRef, useEffect, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { Nav } from './styles'
import { Styled } from '../types'

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
  const [styled, setStyled] = useState<Styled>({ openNav: false })

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStyled({ openNav: isOpen })
      }, 1000)
    } else {
      setStyled({ openNav: isOpen })
    }
  }, [isOpen])

  return (
    <Nav
      openNav={styled.openNav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </Nav>
  )
}

export default Menu
