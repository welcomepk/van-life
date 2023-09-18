import React from 'react'
import { Outlet } from 'react-router-dom'
function HostVanDetailLayout() {
    return (
        <>
            <nav>
                <NavLink to={`/host/vans/${id}/details`}>Details</NavLink>
                <NavLink to={`/host/vans/${id}/pricing`}>Pricing</NavLink>
                <NavLink to={`/host/vans/${id}/photos`}>Photos</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostVanDetailLayout