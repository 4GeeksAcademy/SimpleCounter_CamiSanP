import React from 'react'
import CardNumber from './cardNumber'

let listCounters = [{ digito: "uno" }
]

const SecondsCounter = (props) => {


  return (
    <div className='container' style={{background: "#335970", width: "1024px", height: "124px", paddingTop: "12px", paddingBottom: "12px"}}>
      <div className='d-flex' style={{justifyContent: "center"}}>
        <div className="card text-center fw-bold fs-1" style={{ width: "7rem", margin: "5px" }}>
          <div className='card-body'>
            <i className='far fa-clock' style={{color: "#335970"}}></i>
          </div>
        </div>

        {props.listDigits.map((value) => {
          return <CardNumber digito={value[1]} key={value[0]} />
        })}

      </div>
    </div>
  )
}

export default SecondsCounter