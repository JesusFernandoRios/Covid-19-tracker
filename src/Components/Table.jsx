import React from 'react'
import numeral from 'numeral'
import './style/table.css'

function Table({countries}) {
    return (
        <div className="table__column">
            {countries.map( ({country, cases}, index) => {
               return(
                   <table className="country__column">
                      <tbody>
                            <tr index={index}>
                                <td>{country}</td>
                                <td><strong>{numeral(cases).format('0,0')}</strong></td>
                            </tr>
                        </tbody> 
                   </table>
                   
               
               )
            })}
        </div>
    )
}

export default Table
