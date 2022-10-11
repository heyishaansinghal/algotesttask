import React from 'react'
import AddLegform from './AddLegform'
import AddLegConfig from './AddLegConfig'
import styled from 'styled-components'
import { MainContext } from '../config/context'
import { useContext } from 'react'
import FetchedLeg from './FetchedLeg'
export default function Addleg() {
  const {addLeg , changeAddLeg , noOfLegs ,addLegConfig , getFireBaseData} = useContext(MainContext)
  return (
    <>
      <LegStyle>
        <div>
          Legs
        </div>
        <div>
        <button id='btn-secondary' onClick={getFireBaseData}>Fetch from Firebase</button>
          <button onClick={()=>{changeAddLeg(true)}}> + Add Leg</button>
        </div>
      </LegStyle>
      {addLeg && <AddLegform></AddLegform>}
      {addLegConfig && <AddLegConfig></AddLegConfig>}
      {noOfLegs && noOfLegs.map((leg)=>(
        <FetchedLeg key={leg.id} leg = {leg}></FetchedLeg>
      ))}
    </>
  )
}


const LegStyle = styled.div `
  color: #3f3f3f;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  padding: 20px 50px;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;

  button{
    color: #375a9e;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
  }
`