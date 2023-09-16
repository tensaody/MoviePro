import { useEffect, useState } from "react"

const Card = ({movies}) => {
    return(
        <div className="app mt-5 relative p-1 flex-inline flex items-center justify-center">
            <h1>Now Playing Movies</h1>
            <div className="row g-3" >
                
                                {
                                movies.results.map((mov, index) => (
                                <div key={index} className='col-12 col-sm-10 col-md-8 col-lg-3'>
                                    <img className='relative w-20' src={`https://image.tmdb.org/t/p/w440_and_h660_face${mov.backdrop_path}`} alt={mov.title}/>
                                    <h1>{mov.title}</h1>
                                </div>
                                ))
                                }                                            
            </div>
            
        </div>
        
    )
}
export const Cards = () => {
    const [mo, setMovies] = useState(null);
    useEffect(() => {
        const fethMovie = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2')
                const data = await response.json();
                setMovies(data);
            }catch (error) {
                console.error("Error", error);
            }
        };

        fethMovie();
    }, []);

    return (
        <div className="app">
            {mo ? <Card movies={mo}/> : <p>Loading...</p>}
        </div>            
    );
};