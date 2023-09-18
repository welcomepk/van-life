import React from 'react'
import { useOutletContext } from 'react-router-dom'
function HostVanPricing() {

    const vanDetail = useOutletContext();
    console.log(vanDetail);
    return (
        <div>

        </div>
    )
}

export default HostVanPricing