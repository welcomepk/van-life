import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function HostLayout() {
    const activeStyle = {
        textDecoration: 'underline !important',
        color: '#000 !important',
    }
    return (
        <>
            <nav className='host-nav'>
                <NavLink end={true} className={({ isActive }) => isActive ? 'active_link' : ''} to='.'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active_link' : ''} to='Income'>Income</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active_link' : ''} to='reviews'>Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active_link' : ''} to='vans'>Vans</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout