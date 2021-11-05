import React,{useState, createContext, useEffect} from 'react'

const Context = createContext();

function ContextProvider({children}) {
   const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
   const [array, setArray] = useState([]);

   const getData = async() => {
      const response = await fetch(url);
      const data = await response.json();
      if(data.drinks.length > 0) {
         setArray(data.drinks)
      }
   }
   // console.log(array);
   useEffect(()=>{
      getData();
   },[])
   return (
      <div>
         <Context.Provider value={{array, setArray}}>
            {children}
         </Context.Provider>
      </div>
   );
};

export {ContextProvider, Context};
