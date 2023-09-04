import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function VanDetail() {
    const [van, setVan] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        fetch('/api/vans/' + id)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])
    console.log(van);

    return (
        <div className='van-detail-container'>
            {
                van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} alt="van-img" />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className='van-price'>{van.price}<span>/day</span></p>
                        <p>{van.description}</p>
                        <button className='link-button'>Rent this van</button>
                    </div>

                ) : <h2>Loading ...</h2>
            }
        </div>
    )
}

export default VanDetail