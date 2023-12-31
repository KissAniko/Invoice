import React from 'react'
import './invoices.css' // CSS beimportálása
const Invoice = (props) => {
    const { id, status, date, amount_in_huf, user } = props.data;


    const statuses = ["Draft", "Pending", "Paid"]
    return (
        <div className='invoice'>

            <div>{id}</div>
            <div>{date}</div>
            <div>{user}</div>
            <div>{amount_in_huf}</div>
            <div className={"status status" + status}>{statuses[status]}</div>
        </div>
    )
}

export default Invoice