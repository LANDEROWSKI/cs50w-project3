import React from 'react'
import { Menu,Icon } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import {useAuth} from '../../../hooks'
import './SideMenu.scss'

export function SideMenus(props) {
    const {children} =props
    const {pathname} = useLocation()
    
    return (
    <div className='side-menu-admin'>
        <MenuLeft pathname={pathname}></MenuLeft>
        <div className='content'>{children}</div>
    </div>
  )
}

function MenuLeft(props){
    const{pathname} = props;
    const{auth} = useAuth()
    return(
        <Menu fixed='left' borderless className='side' vertical>
            <Menu.Item as={Link} to={'/admin'} active={pathname === '/admin'}>
                <Icon name='home'></Icon>
                Pedidos
            </Menu.Item>

            {/* Menu para administrar las mesas */}

            <Menu.Item as={Link} to={'/admin/tables'} active={pathname=== '/admin/tables'}>
                <Icon name='table'>
                </Icon>
                Mesas
            </Menu.Item>

            {/* Menu para ver el historial de pagos */}

            <Menu.Item as={Link} to={'/admin/payments-history'} active={pathname=== '/admin/payments-history'}>
                <Icon name='history'>
                </Icon>
                Historial de pagos
            </Menu.Item>

            {/* Menu para ver las categorias */}

            <Menu.Item as={Link} to={'/admin/categories'} active={pathname=== '/admin/categories'}>
                <Icon name='folder'>
                </Icon>
                Categorias
            </Menu.Item>

            {/* Menu para visualizar los productos */}

            <Menu.Item as={Link} to={'/admin/products'} active={pathname=== '/admin/products'}>
                <Icon name='cart'>
                </Icon>
                Productos
            </Menu.Item>

            {/* Menu para usuarios (no staff) */}

            {auth.me?.is_staff && (
            <Menu.Item as={Link} to={'/admin/users'} active={pathname=== '/admin/users'}>
            <Icon name='users'>
            </Icon>
            Usuarios
        </Menu.Item>

            )}

        </Menu>

    )
}
