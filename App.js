import React, { useState,useEffect } from 'react'
import './App.css';
import Table from './table';
import Wallet from './wallet';
import Navbar from './Navbar';

function App() {
  const [balance, setBalance] = useState(1000)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd")
      .then(res => res.json())
      .then(data => {
        setCoins(data.data)
    
      })
  }, [])


  return (
    <div className="App">
            <Navbar balance={balance}/>
            <Table coins={coins} />   
            <Wallet balance={balance} setBalance={setBalance} coins={coins}/>
    </div>
  );
}

export default App;
