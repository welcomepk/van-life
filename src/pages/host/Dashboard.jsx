import React from 'react'
import { Outlet, Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div>
            Host Dashboard
            <nav>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Dashboard