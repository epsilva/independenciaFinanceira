import React from 'react'
import { motion } from 'framer-motion'
import { IconPaceHolder, TextPlaceHolder, Li } from './styles'
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const MenuItem = ({ menu }) => {
  const style = { border: `2px solid ${colors[menu.id]}` }
  return (
    <Li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={menu.rota}>
        <IconPaceHolder style={style} />
      </Link>
      <Link href={menu.rota}>
        <TextPlaceHolder>{menu.titulo}</TextPlaceHolder>
      </Link>
    </Li>
  )
}
