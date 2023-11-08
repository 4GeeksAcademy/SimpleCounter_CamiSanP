import React from 'react'

const CardNumber = (props) => {
    return (
        <div className="card text-center fw-bold fs-1" style={{width: "7rem", margin: "5px",color: "#335970", fontFamily:"cursive"}}>
            <div className="card-body">
                <p className="card-text">{props.digito}</p>
            </div>
        </div>
    )
}

export default CardNumber