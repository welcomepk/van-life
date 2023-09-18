import React, { useEffect, useState } from 'react'
import { useParams, Outlet, Link, NavLink, useNavigate } from 'react-router-dom'

function HostVanDetail() {
    const [vanDetail, setVanDetail] = useState(null)
    const navigate = useNavigate();
    const { id } = useParams()
    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVanDetail(data.vans)
            })
    }, [id])

    // if (!vanDetail) return <h2>Loading ...</h2>
    return (
        <div>
            {/* <Link className='back-button' onClick={() => navigate(-1)}>&larr; <span>Back to all vans</span></Link> */}
            <Link className='back-button' to='..' relative='path' >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                {
                    !vanDetail ? <h2>Loading ...</h2> :
                        <>
                            <div className='host-van-single'>
                                <img src={vanDetail.imageUrl} alt="van-img" />
                                <div className="host-van-info">
                                    <h3>{vanDetail.name}</h3>
                                    <p>${vanDetail.price}/day</p>
                                </div>
                            </div>
                            <nav className='host-van-detail-nav'>
                                <NavLink end className={({ isActive }) => isActive ? 'active_link' : ''} to={`.`}>Details</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'active_link' : ''} to={`pricing`}>Pricing</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'active_link' : ''} to={`photos`}>Photos</NavLink>
                            </nav>
                            <Outlet context={vanDetail} />
                        </>
                }
            </div>
        </div>
    )
}

export default HostVanDetail