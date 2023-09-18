import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function HostVans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
            .catch(err => {
                console.log(err);
            })
    }, [])

    const renderVans = vans.map(van => (<Link
        to={`/host/vans/${van.id}`}
        key={van.id}
        className='host-van-link-wrapper'
    >
        <div className='host-van-single'>
            <img src={van.imageUrl} alt="van-img" />
            <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    </Link>))

    return (
        <div className='host-vans-list'>
            {
                vans.length > 0 ? renderVans : <h2>Loading ...</h2>
            }
        </div>
    )
}

export default HostVans