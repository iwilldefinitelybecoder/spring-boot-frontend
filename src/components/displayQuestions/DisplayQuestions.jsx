import React, { useEffect, useState } from 'react'
import "./displayQuestions.css"
import { getQuestions } from '../../utils/api'
import CarsListCard from '../resuableContainers/CarsListCard'
const DisplayQuestions = () => {

  const [questions, setQuestions] = useState([])
  useEffect(() => {
    async function GetQuestions() {
      const response = await getQuestions()
      setQuestions(response)
    }
    GetQuestions()
  }, [])


  return (
    <div className='displayContainer'>
      {

      questions?.map((question) => (
        <CarsListCard name={question.carBrand} model={question.carModel} price={question.price} year={question.year} transmission={question.transmissionType} link = {question.imageLink} />
      ))
    }

      </div>
  )
}

export default DisplayQuestions