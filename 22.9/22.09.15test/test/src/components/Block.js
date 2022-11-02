import React from 'react'
import { boom } from '../img';

const Block = ({num,randomnum}) => {    
  function pop(e) {
    if(e.target.style.backgroundColor === "red"){
      return
    }
    if(randomnum.includes(Number(e.target.dataset.da))){
      console.log(document.querySelectorAll("img"))
      for (let i = 0; i < 5; i++) {
        document.querySelectorAll("img")[i].style.display = "block"
      }
      for (let i = 0; i < document.querySelectorAll(".block").length; i++) {
        document.querySelectorAll(".block")[i].style.backgroundColor = "red"
      }
      document.getElementById("return").style.display= "block"
      document.querySelector("#return").onclick = ()=>{
        window.location.reload();
      }
      alert("BOOM!!")
    }
    else{
      e.target.style.backgroundColor = "blue"
    }
  }
  return (
    <div>
        <div onClick={pop} data-da={num} className='block'> 
          {randomnum.includes(num)? <img src={boom} alt=""/>:""}  
        </div>
    </div>
  ) 
}

export default Block