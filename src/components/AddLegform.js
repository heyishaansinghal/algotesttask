import React from 'react'
import { MainContext } from '../config/context'
import { useContext } from 'react'
import { AddLegForm } from '../styles/AddLegForm'

export default function AddLegform() {
    const {changeAddLeg  , changeLegsInfo  ,  changeAddLegConfig , legsinfo } = useContext(MainContext)
  return (
    <AddLegForm>
        <div className='legMode'>
            <span>Select Segments</span>
            <div>
                <label className='segments' htmlFor="futures">Futures</label>
                <input type="radio" name="segments" className='radio' id="futures" />
                <label className='segments' htmlFor="options">Options</label>
                <input  type="radio" name="segments" className='radio' id="options" />
            </div>
        </div>
        <div className='legSettings'>
            <div className='inputField'>
                <label htmlFor="totalLot">Total Lot</label>
                <input type="number" name="totalLot" min="1" value={legsinfo.totalLot} onChange={(e)=>{changeLegsInfo(e)}}id="totalLot" />
            </div>
            {console.log(legsinfo)}
            <div className='inputField'>
                <label htmlFor="position">Position</label>
                <select name="position" value={legsinfo.position} onChange={(e)=>{changeLegsInfo(e)}} id="position">
                    <option value="sell">Sell</option>
                    <option value="buy">Buy</option>
                </select>
            </div>
            <div className='inputField'>
                <label htmlFor="optionType">Option Type</label>
                <select name="optionType" value={legsinfo.optionType} onChange={(e)=>{changeLegsInfo(e)}} id="optionType">
                    <option value="call">Call</option>
                    <option value="buy">Buy</option>
                </select>
            </div>
            <div className='inputField'>
                <label htmlFor="expiry">Expiry</label>
                <select name="expiry" value={legsinfo.expiry} onChange={(e)=>{changeLegsInfo(e)}} id="expiry">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <div className='inputField'>
                <label htmlFor="strike">Select Strike Criteria</label>
                <select name="strike" value={legsinfo.strike} onChange={(e)=>{changeLegsInfo(e)}} id="strike">
                    <option value="strikeType">Strike Type</option>
                    <option value="premiumRange">Premium Range</option>
                    <option value="closestPremium">Closest Premium</option>
                    <option value="straddleWidth">Straddle Width</option>
                </select>
            </div>
            <div className='inputField'>
            <label htmlFor="strikeType">Strike Type</label>
            <select name="strikeType" value={legsinfo.strikeType} onChange={(e)=>{changeLegsInfo(e)}} id="strikeType">
                <option value="ATM">ATM</option>
                <option value="ITM11">ITM11</option>
            </select>
            </div>
        </div>
        <div>
        <button id='btn-ter' onClick={()=>{changeAddLegConfig(true)}}>Add Leg</button>
        <button id='btn-can' onClick={()=>{
            changeAddLeg(false) 
            changeAddLegConfig(false)
        }}>Cancel</button>
        </div>
    </AddLegForm>
  )
}


