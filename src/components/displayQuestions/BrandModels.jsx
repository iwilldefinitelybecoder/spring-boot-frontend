import React, { useEffect,useState } from 'react'
import { getBrands } from '../../utils/api'
import CarsListCard from '../resuableContainers/CarsListCard'
import { useParams } from 'react-router-dom'

const BrandModels = () => {

    const model = useParams()
    console.log(model)
    const [models, setModels] = useState([])
    useEffect(() => {
        async function GetModels() {
            const response = await getBrands(model.brand)
            setModels(response)
            console.log(response)
        }
        GetModels()
    }, [])

  return (
    <div>
        {
            models?.map((model) => (
                <CarsListCard name={model.carBrand} model={model.carModel} price={model.price} year={model.year} transmission={model.transmissionType} link = {model.imageLink} />
            ))
        }
    </div>
  )
}

export default BrandModels