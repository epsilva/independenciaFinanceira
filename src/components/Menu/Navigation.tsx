import React, { useState } from 'react'
import { MenuItem } from './MenuItem'
import { Ul } from './styles'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const Navigation = ({ toggle }) => (
  <Ul variants={variants}>
    {itemIds.map(menu => (
      <div onClick={toggle}>
        <MenuItem menu={menu} key={menu.id} />
      </div>
    ))}
  </Ul>
)

const itemIds = [
  {
    id: 1,
    rota: '/',
    titulo: 'Home'
  },
  {
    id: 2,
    rota: '/formcalc',
    titulo: 'Independência Financeira'
  }
]
