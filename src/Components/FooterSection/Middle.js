import React from 'react'
import "./Middle.css"
function Middle({data}) {
    console.log(data)
    return (
        <div className="middle">
            {
                data.map((val,index)=>{
                    return (<a href="#">{val}</a>)
                })
            }
        </div>
    )
}

export default Middle
