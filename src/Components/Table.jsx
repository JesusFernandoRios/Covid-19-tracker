import React from 'react'
import numeral from 'numeral'
import './style/table.css'

function Table({countries}) {
    return (
        <div className="table">
<<<<<<< HEAD
            <table>
                <tbody>
                    {countries.map( ({country, cases}, index) => {
                    return(
                    <tr key={index}>
                        <td>{country}</td>
                        <td><strong>{numeral(cases).format('0,0')}</strong></td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
            
=======
            {countries.map( ({country, cases}, index) => {
               return(
               <tr key={index}>
                    <td>{country}</td>
                    <td><strong>{numeral(cases).format('0,0')}</strong></td>
                </tr>
               )
            })}
>>>>>>> f9a0e22aaccfde4b1e99d7ae7dc9118c1b21abfa
        </div>
    )
}

export default Table
