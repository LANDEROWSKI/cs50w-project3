import React from 'react'
import './SideMenu.scss'

export function SideMenus(props) {
    const {children} =props
    return (
    <div>
        <h1>Hola SideMenu</h1>
        <div>
            {children}
        </div>
    </div>
  )
}
