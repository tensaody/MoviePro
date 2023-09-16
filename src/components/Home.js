import React, { useEffect, useState } from 'react'
import Grid from './Grid'

export default function Home({movies}) {
    
    const [m, setMo] = useState([])
    const fetchMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2')
        .then(res => res.json())
        .then(resp =>setMo(resp))
    }
    useEffect(() => {
        fetchMovies()
        console.log(m)
    }, [])
  return (
    <div className='container mt-5'>
        <div className='row g-4'>
            {
                movies.map((mo) => (
                    <div
                    key={mo.id}
                    className='col-12 col-sm-6 col-md-4 col-lg-2'
                    >
                        <Grid
                            imageURL = {`https://image.tmdb.org/t/p/w440_and_h660_face${mo.backdrop_path}`}
                            des = {mo.title}
                        />
                    </div>
                ))
                }
        </div>
    </div>
  )
}
