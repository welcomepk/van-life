import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function HostLayout() {
    return (
        <>
            <nav className='host-nav'>
                <Link to='/host'>Dashboard</Link>
                <Link to='/host/Income'>Income</Link>
                <Link to='/host/reviews'>Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout