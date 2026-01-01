  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {
    const [On, setOn] = useState("off")

  function updateState() {
    if (On === "off") {
      setOn("on")
    } else if (On === "on") {
      setOn("high")
    } else {
      setOn("off")
    }
  }

    function renderBulb() {
      if (On === "on") {
        return <img src="on_blub.png" alt="" height={270} />
      }else if(On === "high"){
        return <img src="sun_bulb.png" alt="" />
      } 
      else {
        return <img src="off_blub.png" alt="" />
      }
    }

    function button_func(){
      if (On === "on") {
        return "high"
      }else if(On === "high"){
        return "off"
      }
      else {
        return "On"
      }
    }


    return (
      <>
        {/* {
          On ? <img src="on_blub.png" alt="" height={270} /> : <img src="off_blub.png" alt="" />
          } */}

        {renderBulb()}


        <div>

          {/* <button onClick={Update} >{On ? "Off" : "On"}</button> */}

          <button onClick={updateState}>{button_func()}</button>
        </div>

      </>
    )
  }

  export default App
