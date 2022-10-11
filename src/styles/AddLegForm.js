import styled from "styled-components"

export const AddLegForm = styled.div `
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
        flex-direction: column;
        margin: 10px 25px;
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
        background-color: white;
        border-radius: 10px;
        min-width: 80px;
        padding: 3px 0px;
    }

`