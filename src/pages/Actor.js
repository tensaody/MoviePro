import React from 'react'
import { useState, useEffect } from 'react';

const Popularr = ({popu}) => {
    return(
    <>  
    {/* **************************** Render Card */}
        <div className="app mt-5 relative p-1 flex-inline flex items-center justify-center">
             <h1>Popular Actors</h1>
             <div className="row g-2" >                
                                 {
                                 popu.cast.map((pop, index) => (
                                 <div key={index} className='col-12 col-sm-8 col-md-6 col-lg-2'>
                                     {/* <img className='relative w-20' src={`https://image.tmdb.org/t/p/w440_and_h660_face${mov.backdrop_path}`} alt={mov.title}/>
                                     <h1>{mov.title}</h1> */}
                                    
                                    {/* <div className="card" style={{width: '12rem'}}>
                                    <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${pop.profile_path}`} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Name: {pop.original_name}</h5>
                                            <h5 className="card-title">Departments: {pop.known_for_department}</h5>
                                            <p className="card-text"></p>
                                        </div>
                                </div> */}
                                <a href={`/detailp/${pop.id}`} className="text-decoration-none">
                                    <div className="card" style={{width: '12rem'}}>
                                        <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${pop.profile_path}`} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Name: {pop.original_name}</h5>
                                            <h5 className="card-title">Departments: {pop.known_for_department}</h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </a>
                                 </div>
                                 ))
                                 }                                            
             </div>            
         </div> 
    {/* **************************** Render Card */}          
    </>                            
    )
}

//*************************************************************/
export const People = () => {
    const [po, setPopular] = useState(null);
    useEffect(() => {
        const fethPopular = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/603692/credits?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US')
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
