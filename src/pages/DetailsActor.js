import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

export default function DetailsActor() {
    let {id} = useParams()
    const [product, setProducts] = useState({
      
    })
    let fetchProducts = (id) => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
      .then(resp => resp.json())
      .then(resp => setProducts(resp))
    }
    useEffect(() => {
      fetchProducts(id)
    }, [])
  return (
    
        <>
        <main>       
              <>
                <div>
                  <h1>Details Items By ID: {id}</h1>             
                </div>                                                                
                  {/* ************************ */}
                  <div class="card container" style={{width: '60rem'}}>
                      <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${product.profile_path}`} alt='photo' style={{height: '25rem'}}/>
                      
                    <div class="card-body">
                      <h5 class="card-title">{product.original_name}</h5>
                      <p class="card-text">{product.known_for_department}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  {/* ************************ */}
              
              </>                
          {/* <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${product.backdrop_path}`} alt='photo'/> */}
        </main>
        </>
        
     
  )
}
