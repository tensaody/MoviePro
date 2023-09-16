import React from 'react'

export default function LoardingView() {
  return (
        <div className="card" aria-hidden="true">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
        </div>
  )
}
