import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function DetailItems() {
    let {id} = useParams()
    const [product, setProducts] = useState({
      
    })
    let fetchProducts = (id) => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
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
                  <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${product.backdrop_path}`} alt='photo' style={{height: '25rem'}}/>
                  
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">{product.overview}</p>
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
// *******************************************8
// const Details =({product}) => {
  
//   return(
//     <>
//     {
//       product.results((pro, index) => (
//         <div key={index} className='col-12 col-sm-8 col-md-6 col-lg-2'>
//           {
//               <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${pro.backdrop_path}`} className="card-img-top" alt="..."/>
//           }         
//         </div>
//         ))
//     }
    
//     </>
//   )
// }

// export const Detailss = () => {
//   let {id} = useParams()
//   const [mo, setMovies] = useState({});
//   // const [loading, setLoading] = useState(true);
//   useEffect(() => {
//       const fethMovie = async (id) => {
//           try {
//               const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2${id}`)
//               const data = await response.json();
//               setMovies(data);
              
//           }catch (error) {
//               console.error("Error", error);
//           }
//       };
//       fethMovie(id);
//   }, []);
//   return (
//       <>        
//       <div className="app">
//           {           
//             <Details product={mo}/>
//           }
//       </div>       
//       </>                         
//   );
// };
