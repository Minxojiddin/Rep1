import React, {useContext} from 'react'
import DataDetailCom from './DataDetailCom'
import {Context} from "../Contex";
import styled from "styled-components";


function DataCom() {
   const{array} = useContext(Context)
   console.log(array);
   return (
      <Container className="nav">

         <div className="wrapper">
            {array.map(el => {
               return  <DataDetailCom el={el}/>

               // let input = document.getElementById("input");
               //
               // input.addEventListener("keyup", () =>{
               //    let inputValue = input.value;
               //    let filteredDate = Context.filter(fl => {
               //       return fl..toLowerCase().includes(inputValue);
               //    })
               //
               //    Context(filteredDate);
               // })

            })}
         </div>
      </Container>
   )
}

const Container = styled.div `
    max-width: 1200px;
    margin: auto;
   
   .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
      grid-gap: 15px;
      padding-top: 50px;
   }
   
   .images {
      display: flex;
      align-items: center;
      justify-content: center;
   }
   
   img {
      height: 300px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }

   img:hover {
      transform: translateY(-20px);
   }
`


export default DataCom
