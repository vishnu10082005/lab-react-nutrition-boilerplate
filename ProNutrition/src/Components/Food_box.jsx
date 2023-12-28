import React, { useState } from 'react'
import "../App.css"

const FoodBox = (props) => {


  let {data:{cal,id,img,name},index} = props

  const [input ,setInput] = useState(0) 
  const [quantity ,setQuantity] = useState(0)
  
  const quantityHandler = () => {
    setQuantity(input)
  }


  return (
    <div className='foodbox_main'>

      <div className='foodbox_main_left'>
        <img src={img} alt="" />
        <div className='foodbox_main_left-1'>
          <h1>{name}</h1>
          <h1>{cal}</h1>
        </div>
        <div className='foodbox_main_left-2'>
          <input type="number" min={0}
          
          style={{
            padding:"7px,8px",
            fontSize:"larger"
          }}
          value={input}
          onChange={(e)=>{
            setInput(e.target.value)
          }}
          />
          <button onClick={quantityHandler} value={input} className='add'>Add</button>

        </div>

      </div>

      <div className='foodbox_main_right'>
        <h4>{name} X {quantity}= {cal*quantity}Calories</h4>
        <button className='reset' onClick={()=>{
          setQuantity(0),
          setInput(0)
        }}>RESET</button>

      </div>

    </div>
  )
}

export default FoodBox
