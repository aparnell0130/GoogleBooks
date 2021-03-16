import React from 'react'
import { Button } from 'react-bootstrap'

function ViewButton({ bookLink }) {
    return (
        <div>
            <Button className='m-1'><a className='text-white text-decoration-none' href={bookLink} target='_blank' rel="noreferrer">View</a></Button>
        </div>
    )
}

export default ViewButton
