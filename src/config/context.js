import { useState  , createContext } from "react";
import { db } from "./firebase-config";
import {collection , addDoc , getDocs}  from "@firebase/firestore"

export const MainContext = createContext()


export const AppContext = ({children})=>{
    const [addLeg , setaddLeg] = useState(false)
    const [addLegConfig , setaddLegConfig] = useState(false)
    const [legsinfo , setLegsInfo] = useState({totalLot : 1})
    const [disabled, setDisabled] = useState(true);
    const [noOfLegs , setNoOfLegs] = useState(0)
    const [traildisabled, setTrailDisabled] = useState(true);

    const changeAddLeg = (e)=>{
        setaddLeg(e)
    }

    const getFireBaseData = async ()=>{
        const legsFireStoreRef = collection(db , "legs")
        const data = await getDocs(legsFireStoreRef)
        setNoOfLegs(data.docs.map((doc)=>({...doc.data() , id : doc.id})))
    }

    const changeLegsInfo = (e)=>{
        setLegsInfo((prevlegsinfo)=>{
            let b = e.target.name
            let a = {}
            a[b] = e.target.value
            return {...prevlegsinfo , ...a} 
        })
    }

    const changeLegsConfig = changeLegsInfo

    const changeAddLegConfig = (e)=>{
        setaddLegConfig((prevLegConfig)=>{
            return e
        })
    }
    const handleConfigClick = ()=>  {
        setDisabled(!disabled);
    }

    const handleTrailClick = ()=>  {
        setTrailDisabled(!traildisabled)
    }
    const setDefaultValues = ()=>{
        let x = {}
        let y = {}
        let a = document.getElementsByTagName("select")
        for (let index = 0; index < a.length; index++) {
             x[a[index].name] = a[index].value
        }
        let b = document.getElementsByTagName("input")
        for (let index = 0; index < b.length; index++) {
             y[b[index].name] = b[index].value
        }
        setLegsInfo(async (prevLegInfo)=>{
            const legsFireStoreRef = collection(db , "legs")
            await addDoc(legsFireStoreRef , {...prevLegInfo , ...x , ...y})
            console.log({...prevLegInfo , ...x , ...y})
            return {...prevLegInfo , ...x , ...y}
        })
}
    return (
        <MainContext.Provider value={{addLeg   , getFireBaseData , setDefaultValues ,noOfLegs , setNoOfLegs ,changeAddLeg ,  changeLegsConfig  ,handleTrailClick  ,traildisabled ,disabled , changeLegsInfo , setaddLeg , handleConfigClick  , addLegConfig , setaddLegConfig , changeAddLegConfig , legsinfo , setLegsInfo}}>
            {children}
        </MainContext.Provider>
    )
}