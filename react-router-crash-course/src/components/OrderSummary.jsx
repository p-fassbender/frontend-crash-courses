import React from 'react'
import { useNavigate } from 'react-router'

export const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Order Confirmed</div>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}
