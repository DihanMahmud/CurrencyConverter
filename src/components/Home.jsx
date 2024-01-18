import { useState } from "react";
import InputBox from "./InputBox";
import useHooks from "../hooks/useHooks";

export default function Home() {
    const [amount, setAmount] = useState('')
    const [convertedAmount, setConvertedAmount] = useState('')
    const [currencyFrom, setCurrencyFrom] = useState('USD')
    const [currencyTo, setCurrencyTo] = useState('BDT')

    const data = useHooks(currencyFrom)

    const lists = Object.keys(data)

    // console.log(lists);

    const swapCurrency = () => {
        setAmount(Number(convertedAmount))
        setCurrencyFrom(currencyTo)
        setConvertedAmount(Number(amount))
        setCurrencyTo(currencyFrom)
    }

    const convert = () => {
      console.log(data[currencyTo].value);
      setConvertedAmount(Number((amount * data[currencyTo].value).toFixed(2)))
    }
    // console.log();
    
    console.log(`${amount} from : ${currencyFrom}, ${convertedAmount} to : ${currencyTo}`);

  return (
    <div className="main">
      <h1>Currency Exchange</h1>
      <div>
        <InputBox
        className='marBot'
        label='From'
        lists={lists}
        money={amount}
        setMoney={setAmount}
        currency={currencyFrom}
        setCurrency={setCurrencyFrom}></InputBox>

        <button className="swap" onClick={swapCurrency}>Swap</button>

        <InputBox 
        className='marTop'
        label='To'
        lists={lists}
        amountDisable = {true}
        money={convertedAmount}
        setMoney={setConvertedAmount}
        currency={currencyTo}
        setCurrency={setCurrencyTo}></InputBox>
        <button className='btn' onClick={convert}>Convert {currencyFrom} to {currencyTo}</button>
      </div>  
    </div>
  )
}
