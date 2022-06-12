import React from 'react'
import { useState } from 'react';

export const Account = () => {
    let [show, setShow] = useState(false);
    let [text, setText] = useState('Show');

    const handleClick = () => {
        setShow(!show)
        if (show) {
            setText("Show")
        } else {
            setText("Hide")
        }
    }

    return (
        <div className="Account">
            <h2>Account Information</h2>
            <table>
                <tbody>
                    <tr><td>Balance</td><td>$100,000</td><td></td></tr>
                    <tr><td>Interest</td><td>%5.0</td><td></td></tr>
                    <tr>
                        <td>Account Number</td>
                        <td> 
                           { show && '11-1234' }
                        </td><td>
                        <button onClick={() => handleClick()}>{text}</button>    
                    </td></tr>
                </tbody>
            </table>
        </div>
    )
}
