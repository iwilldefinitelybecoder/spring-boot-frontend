import React from 'react'
import "../../index.css"
import "./listCard.css"
import { Link } from 'react-router-dom'
const CarsListCard = ({ name, model, price, year, transmission, link }) => {
    return (
        <>
        <Link to = {`/cars/${name}`} className='stretched-link'>
            
            <div className='ContainerBody' >
                <img src='https://media.istockphoto.com/id/952729630/photo/test-pushing-keyboard-with-finger-3d-illustration.jpg?s=612x612&w=0&k=20&c=y6zIqQjHBkqN1LPQ8xXJD8qFLwWwRVanFLhhhppczNE=' alt='cars' />
                <div className='ContainerBodyText'>
                    <div className='BodyTextHolder'>

                        <h2>{name}</h2>
                        <div className='BodyTextHolderP'>
                            <div className='BodyTextHolderP1'>
                                <div className='texts'>
                                    <h3>{model}</h3>
                                </div>
                                <div  className='texts'>
                                    <h3>{price}</h3>
                                </div>
                                
                            </div>
                            <div className='BodyTextHolderP2'>
                                <div className='texts'>
                                    <h3>{year}</h3>
                                </div>
                                <div className='texts'>
                                    <h3>{transmission}</h3>
                                    <a to = {`/cars/${model}`} className='stretched-link'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default CarsListCard