import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoardingView from "../components/LoardingView";




const Card = ({movies}) => {
  
    return(
    <>
      <section className="font inner_content new_index" style={{backgroundColor: 'whitesmoke', height: '9rem'}}>
    <div id="media_v4" class="media discover">
      <div class="column_wrapper">
        <div class="content_wrapper wrap">
          <div class="title" style={{color: 'darkblue', textAlign: 'center'}}>
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome.Millions of movies, TV shows and people to discover. Explore now.</span>Movies</h1>
            
          </div>
        </div>
      </div>
    </div>
  </section>  
  
    {/* **************************** Render Card */}
        <div className="app mt-5 relative p-1 flex-inline flex items-center justify-center">
             <h1>Now Playing Movies</h1>
             <div className="row g-2" >
                
                                 {
                                  
                                  movies.results.map((mov, index) => (
                                    <div key={index} className='col-12 col-sm-8 col-md-6 col-lg-2'>                                                                              
                                       {/* <div className="card" style={{width: '12rem'}}>
                                        <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${mov.backdrop_path}`} className="card-img-top" alt="..."/>
                                           <div className="card-body">
                                               <h5 className="card-title">{mov.title}</h5>
                                               <p className="card-text"></p>
                                           </div>
                                      </div> */}
                                      <a href={`/detailp/${mov.id}`} className="text-decoration-none">
	                                      <div className="card" style={{width: '12rem'}}>
                                        <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${mov.backdrop_path}`} className="card-img-top" alt="..."/>
                                           <div className="card-body">
                                               <h5 className="card-title">{mov.title}</h5>
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

    {/* Lastest Trailer */}
    
    <div className="app" style={{backgroundColor: 'darkblue', height: '27rem'}}>
      <h1 className="color">What's Popular</h1>
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
    )
}
export const Cardss = () => {
    const [mo, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fethMovie = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2')
                const data = await response.json();
                setMovies(data);
                setLoading(false);
            }catch (error) {
                console.error("Error", error);
            }
        };
        fethMovie();
    }, []);
    return (
        <>        
        <div className="app">
            {/* {mo ? <Card movies={mo}/> : <p>Loading...</p>} */}
            {
              loading ?
              <div className="row g-3">
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
                  <div className="col-10 col-sm-6 col-md-4 col-lg-2">
                      <LoardingView/>
                  </div>
              </div>
              :
              <Card movies={mo}/>
            }

        </div>       
        </>                         
    );
};