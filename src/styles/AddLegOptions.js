import styled from "styled-components"

export const AddLegOptions = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 10rem;
    align-items: center;
    padding: 20px 50px;
    .legMode {
        display: flex;
        justify-content: space-between;
        min-width: 25%;
    }
    .legMode label{
        padding: 20px;
        cursor: pointer;
    }
    .radio{
        display: none;
    }
    .inputField{
        display: flex;
        justify-content: space-between;
    }
    .legSettings{
        display: flex;
        justify-content: space-between;
    }
    label{
        margin: 10px 0px;
    }
    input,select{
        outline: none;
        font-size: 13px;
        text-align: center;
        border: none;
        margin: 0px 25px;
        color: white;
        background-color: #375a9e;
        border-radius: 10px;
        min-width: 80px;
        padding: 3px 0px;
    }

    #totalLot{
        background-color: white;
    }

`