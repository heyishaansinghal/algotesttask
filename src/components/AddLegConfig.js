import React from 'react'
import { AddLegOptions } from '../styles/AddLegOptions'
import { MainContext } from '../config/context'
import { LegConfig } from '../styles/AddLegConfig'
import { AddLegConfigDiv } from '../styles/AddLegConfig'
import { useContext } from 'react'

export default function AddLegConfig() {
    const {changeAddLegConfig  , setDefaultValues ,legsinfo ,  handleTrailClick , changeLegsConfig ,traildisabled ,handleConfigClick ,disabled , changeLegsInfo} = useContext(MainContext)
  return (
    <AddLegOptions>
        <AddLegConfigDiv>
        <span className='closeBtn'><button onClick={()=>{changeAddLegConfig(false)}}>&times;</button></span>
        <div className='legSettings'>
            <div className='inputField'>
                <label htmlFor="totalLost">Total Lot</label>
                <input type="number" name="totalLot" min="1"  onChange={(e)=>{changeLegsInfo(e)}}  value={legsinfo.totalLot} id="totalLot" />
            </div>
            <div className='inputField'>
                <label htmlFor="position">Position</label>
                <select name="position" onChange={(e)=>{changeLegsInfo(e)}}  value={legsinfo.position} id="position">
                    <option value="sell">Sell</option>
                    <option value="buy">Buy</option>
                </select>
            </div>
            <div className='inputField'>
                <label htmlFor="optionType">Option Type</label>
                <select name="optionType" onChange={(e)=>{changeLegsInfo(e)}}  value={legsinfo.optionType} id="optionType">
                    <option value="call">Call</option>
                    <option value="buy">Buy</option>
                </select>
            </div>
            <div className='inputField'>
                <label htmlFor="expiry">Expiry</label>
                <select name="expiry" onChange={(e)=>{changeLegsInfo(e)}}  value={legsinfo.expiry} id="expiry">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <div className='inputField'>
                <label htmlFor="strike">Select Strike Criteria</label>
                <select name="strike" onChange={(e)=>{changeLegsInfo(e)}}  value={legsinfo.strike} id="strike">
                    <option value="strikeType">Strike Type</option>
                    <option value="premiumRange">Premium Range</option>
                    <option value="closestPremium">Closest Premium</option>
                    <option value="straddleWidth">Straddle Width</option>
                </select>
            </div>
            <div className='inputField'>
            <label htmlFor="strikeType">Strike Type</label>
            <select name="strikeType" onChange={(e)=>{changeLegsInfo(e)}}  value={legsinfo.strikeType} id="strikeType">
                <option value="ATM">ATM</option>
                <option value="ITM11">ITM11</option>
            </select>
            </div>
        </div>
        <LegConfig>
            <div className='dispflex'>
                <div>
                    <label htmlFor="momentum">Simple Momentum</label>
                    <input onChange={handleConfigClick}  type="checkbox" name="momentum" id="momentum" />
                </div>
                <div>
                    <select onLoad={function(e){console.log(e)}()} disabled = {disabled} onChange={(e)=>{changeLegsConfig(e)}} name="momentumSelect" id="momentumSelect">
                        <option value="points">Points UP</option>
                        <option value="pointsDown">Points DOWN</option>
                        <option value="percentageUP">Percentage Up</option>
                        <option value="percentageDown">Percentage Down </option>
                    </select>
                    <input disabled = {disabled} onChange={(e)=>{changeLegsConfig(e)}} value={legsinfo.momentumValue || 1}  type="number" name="momentumValue" id="momentumValue" />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="trail">Trail SL</label>
                    <input onChange={handleTrailClick}  type="checkbox" name="trail" id="trail" />
                </div>
                <div>
                    <select disabled={traildisabled} onChange={(e)=>{changeLegsConfig(e)}}  name="trailSelect" id="trailSelect">
                        <option value="points">Points UP</option>
                        <option value="pointsDown">Points DOWN</option>
                        <option value="percentageUP">Percentage Up</option>
                        <option value="percentageDown">Percentage Down </option>
                    </select>
                    <input disabled={traildisabled} type="number" value={legsinfo.trailValue || 1} onChange={(e)=>{changeLegsInfo(e)}} name="trailValue" id="trailValue" />
                    <input disabled={traildisabled} type="number" value={legsinfo.trailValueCap || 1} onChange={(e)=>{changeLegsInfo(e)}} name="trailValueCap" id="trailValueCap" />
                </div>
                <div>
                    <button onClick={setDefaultValues}>SUBMIT</button>
                </div>
            </div>
        </LegConfig>
        </AddLegConfigDiv>
    </AddLegOptions>
  )
}

