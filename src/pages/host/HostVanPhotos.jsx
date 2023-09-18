import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
    const vanDetail = useOutletContext()
    return (
        <img src={vanDetail.imageUrl} alt="" className='host-van-detail-image' />
    )
}

export default HostVanPhotos