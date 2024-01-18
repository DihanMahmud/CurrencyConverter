import './App.css'
import Home from './components/Home'
import { FaDollarSign, FaPoundSign, FaYenSign, FaEuroSign } from "react-icons/fa";
import { FaFrancSign } from "react-icons/fa6";

function App() {

  return (
    <div className='home'>
      <Home></Home>
      <FaDollarSign id='dollar' className='fa' />
      <FaEuroSign id='euro' className='fa' />
      <FaPoundSign id='pound' className='fa' />
      <FaYenSign id='yen' className='fa' />
      <FaFrancSign id='franc' className='fa' />
    </div>
  )
}

export default App
