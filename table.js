import React, { useState, useEffect } from 'react'
import './table.css'
const Table = ({ coins }) => {
var count=-1;
    return (
        <div>
                   <table >
                       <th>ID</th>
                       <th>Name</th>
                       <th>Symbol</th>
                       <th>Price</th>
                       {
                coins.map((coin) => (
                    <tr key={coin.id}>
                        <td >{count+=1}</td>
                        <td >{coin.slug}</td>
                        <td>{coin.symbol}</td>
                        <td>{coin.metrics.market_data.price_usd.toFixed(2)}</td>
                    </tr>
                   
                ))}
                </table>   
        </div>
    )
}

export default Table
