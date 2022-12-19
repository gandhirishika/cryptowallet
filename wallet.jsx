import React, { useState, useEffect } from 'react'
const Wallet = ({ balance, setBalance, coins }) => {
    const [currency, setCurrency] = useState(0)
    const [quantity, setquantity] = useState(0)
    const [totalvalue, settotalvalue] = useState(0)
    return (
        <div>
            <form action="">
                <div >please enter quantity of coin</div>
                <input type="number" name="" id="" onChange={e => {
                
                setquantity(e.target.value)}}
                
                />
                <div >please enter id of coin between 0 and 19</div>
                <input type="number" name="" id="" onChange={e => {
                    settotalvalue(coins[e.target.value].metrics.market_data.price_usd * quantity)
                }} />
            </form>


            <div>total cart value {totalvalue} </div>
            <button onClick={() => {
                {if(totalvalue>1000){
                    alert("transaction declined not enough balance")
                }
                   else{
                    setBalance(balance - totalvalue)
                    alert("transaction successful")
                   }
                }  
            }}>Buy Now</button>
        </div>
    )
}
export default Wallet