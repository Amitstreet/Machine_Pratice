import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Progress from './Progress.jsx'
import ProgressBars from './Timer_based/ProgressBars.jsx'
import Progress_Bar3 from './Timer_based/Progress_Bar3.jsx'
import UseEffect from './Timer_based/useEffect.jsx'
import Toast from './Timer_based/toast.jsx'
import Count_down_timer from './Timer_based/count_down_timer.jsx'
import Traffic_light from './Timer_based/traffic_light.jsx'
import Grid from './Timer_based/grid.jsx'
import Mole from './Timer_based/whack_mole.jsx'
import Accordion from './acordian.jsx'
import Memory from './Timer_based/Memory.jsx'
import TODO from './custome_Components/todo.jsx'
import CommentSection from './nested.jsx'
import Pagination from './Pagination/Pagination.jsx'
import Otp from './custome_Components/otp.jsx'
import Slider from './Timer_based/Slider.jsx'
import Star from './custome_Components/Star.jsx'
import File_expolorer from './File_explorery/Fileexpolorer.jsx'
import FileContext from './Context.jsx'
import Multi from './mult_srteper.jsx/Multi.jsx'
function App() {
  return (
    <>
      {/* <Toast/> */}
      {/* <Count_down_timer/> */}
      {/* <Traffic_light/> */}
    <FileContext>
      </FileContext>
      <Multi/>
    </>
  )
}

export default App
