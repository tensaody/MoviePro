import React from 'react'
import { useState, useEffect } from 'react';

const Popularr = ({popu}) => {
    return(
    <>  
    {/* **************************** Render Card */}
        <div className="app mt-5 relative p-1 flex-inline flex items-center justify-center" style={{backgroundColor: 'greenyellow'}}>
             <h1>Details Movies</h1>
             <div className="row g-2" >                
                                 {
                                    <>
                                    <div className='col-12 col-sm-8 col-md-6 col-lg-2'>
                                        <div class="card" style={{width: '12rem'}}>
                                            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${popu.poster_path}`} className="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{popu.original_title}</h5> 
                                                    <p>{popu.overview}</p>   
                                                </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-8 col-md-6 col-lg-2'>
                                        <div class="card" style={{width: '12rem'}}>
                                            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${popu.backdrop_path}`} className="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{popu.original_title}</h5>  
                                                    <p>{popu.overview}</p>  
                                                </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-8 col-md-6 col-lg-2'>
                                        <div class="card" style={{width: '12rem'}}>
                                            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${popu.poster_path}`} className="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{popu.original_title}</h5>
                                                    <p>{popu.overview}</p>    
                                                </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-8 col-md-6 col-lg-2'>
                                        <div class="card" style={{width: '12rem'}}>
                                            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${popu.backdrop_path}`} className="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{popu.original_title}</h5> 
                                                    <p>{popu.overview}</p>   
                                                </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-8 col-md-6 col-lg-2'>
                                        <div class="card" style={{width: '12rem'}}>
                                            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${popu.poster_path}`} className="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{popu.original_title}</h5>
                                                    <p>{popu.overview}</p>    
                                                </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-8 col-md-6 col-lg-2'>
                                        <div class="card" style={{width: '12rem'}}>
                                            <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${popu.backdrop_path}`} className="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                    <h5 class="card-title">{popu.original_title}</h5> 
                                                    <p>{popu.overview}</p>   
                                                </div>
                                        </div>
                                    </div>

    {/* Lastest Trailer */}
    
    <div className="app mt-5" style={{backgroundColor: 'darkgreen', height: '27rem'}}>
      <h1 className="color">View Details Popular Movies</h1>
      <div className="pt-2">
      
            <div className="row g-5">
                <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={{width: '12rem'}}>
                  
              <img src="https://www.thailandfoundation.or.th/wp-content/uploads/2021/06/poster1.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Thai Movies</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  
                </div>
              </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={{width: '12rem'}}>
              <img src="https://i.mydramalist.com/jQv6rf.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Three Lady</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  
                </div>
              </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={{width: '12rem'}}>
              <img src="https://www.thaiworldview.com/tv/jpg/film345.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Four Flower</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  
                </div>
              </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={{width: '12rem'}}>
              <img src="https://i.mydramalist.com/BVe2l_4c.jpg?v=1" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Break Hearth</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  
                </div>
              </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={{width: '12rem'}}>
              <img src="https://images.static-bluray.com/movies/covers/71950_front.jpg?t=1367510065" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">One More Night</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  
                </div>
              </div>
                </div>
                <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={{width: '12rem'}}>
              <img src="https://i.pinimg.com/1200x/33/5f/b9/335fb902a83e92efd9101d5f4477f7ef.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Hellow World</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  
                </div>
              </div>
                </div>
            </div>
      </div>
    </div>    
    {/* Lastest Trailer */}        
                                    
                                    </>                                                                                                                                    
                                 }                                            
             </div>            
         </div> 
    {/* **************************** Render Card */}          
    </>                            
    )
}

//*************************************************************/
export const Details = () => {
    const [po, setPopular] = useState(null);
    useEffect(() => {
        const fethPopular = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/502356?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US')
                const data = await response.json();
                setPopular(data);
            }catch (error) {
                console.error("Error", error);
            }
        };
        fethPopular();
    }, []);
    return (
        <>        
        <div className="app">
            {po ? <Popularr popu={po}/> : <p>Loading...</p>}
        </div>       
        </>                         
    );
};
