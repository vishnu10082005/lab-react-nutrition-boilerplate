import { useState } from 'react'
import './App.css'
import Search from './Components/Search'
import FoodBox from './Components/Food_box.jsx'
import foodData from "./resources/FoodData.js"

function App(){

  const [search,setSearch] = useState("")




  return(
    <>
      <h1>🍒 Pro Nutrition 🍒</h1>
      <Search setSearch={setSearch}/>


      {foodData.filter((e)=>{
         return e.name.toLowerCase().includes(search.toLowerCase())
      }).map((e,i)=>{
      
        return <FoodBox data={e} index={i}/>
          
      })}
    
    </>
  )
}

export default App
