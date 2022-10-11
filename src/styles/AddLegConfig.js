import styled from 'styled-components'

export const LegConfig = styled.div`
display: flex;
margin: 25px 10px;
padding: 10px;
justify-content: center;
button{
    padding: 10px 20px;
    border: none;
    outline: none;
    color: white;
    background-color: navy;
    border-radius: 12px;
    margin-top: 50px;
}

`
export const AddLegConfigDiv = styled.div `
background-color: #f0f0f4;
padding: 25px 20px;
display: flex;
flex-direction: column;
justify-content: center;
.closeBtn{
    display: flex;
    width: 100%;
    margin-top: -20px;
    margin-bottom: 20px;
    justify-content: flex-end;
}
.closeBtn button{
    background-color: #e59595;
    color: white;
    font-size: 1.2rem;
    width: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    height: 1.5rem;
    border-radius: 50%;
}
input{
    width: 20px;
}
input:disabled{
    opacity: 0.5;
}
#totalLot{
    color: black;
}
`
