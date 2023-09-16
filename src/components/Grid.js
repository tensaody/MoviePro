import React from 'react'

export default function Grid(props) {
  return (
        <div class="card" style={{width: '18rem'}}>
            <img src={props.imageURL} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.des}</h5>
            </div>
        </div>
  )
}
