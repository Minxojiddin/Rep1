import React from 'react'

function DataDetailCom({el}) {
   return (
      <div>
         {/*<h1>{el.idDrink}</h1>*/}
         {/*<h1>{el.strDrink}</h1>*/}
         {/* <h1>{el.strCategory}</h1>*/}
          <div className="images">
              <img src={el.strDrinkThumb} alt=""/>
          </div>
      </div>
   )
}

export default DataDetailCom
