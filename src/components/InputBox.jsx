import { useId } from "react"

export default function InputBox({money,setMoney,currency,setCurrency,label,amountDisable,lists}) {

    function changeAmount(e){
        e.target.value == 0 ? setMoney('') : setMoney(Number(e.target.value)) 
    }

    function selectCountry(e){
        setCurrency(e.target.value)
    }

    const uniqueId = useId();

  return (
    <div className="box">
        <div className="left-box">
            <label htmlFor={uniqueId}>{label}</label>
            <input
            placeholder="Amount"
             disabled = {amountDisable}
             id={uniqueId}
             value={money}
             onChange={changeAmount}
             type="number" />
        </div>
        <div className="right-box">
            <label htmlFor={uniqueId}>Currency Type</label>
            <select
             onChange={selectCountry}
             value={currency}
             name="" id={uniqueId}>
                {
                    lists.map((code) => {
                        return <option key={code} value={code}>{code}</option>
                    })
                }
                {/* <option value="bdt">bdt</option> */}
            </select>
        </div>
    </div>
  )
}
