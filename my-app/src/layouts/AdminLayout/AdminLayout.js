import React from 'react'
import { LoginAdmin } from '../../templates/Admin'
import "./AdminLayout.scss"
import {useAuth} from '../../hooks'
import { TopMenu, SideMenus } from '../../components/Admin';



export  function AdminLayout(props) {
    const {children} = props;  
    const {auth} = useAuth()

    
    if(!auth) return <LoginAdmin />
  return (
    <div className='admin-layout'>
        <div className='admin-layout__menu'>
          <TopMenu />

          <div className='admin-layout__main-content'>
            <SideMenus>
              {children}
            </SideMenus>
          </div>

        </div>

    </div>
  )
}
