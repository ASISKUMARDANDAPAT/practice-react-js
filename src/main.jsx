import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Data from './components/Data.jsx'
import Cards from './components/Cards/Cards.jsx'
import StudentDetails from './components/StudentDetails/StudentDetails.jsx'
import Propes from './components/Propes/Propes.jsx'
import ComponentA from './components/PropsDrilling/componentA.jsx'
import MovieCard from './components/PropsMovieCard/MovieCard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
    {/* <Data />
    <Cards />  */}
    {/* <StudentDetails /> */}
    {/* <Propes/> */}
    {/* <ComponentA/> */}
    {/* <MovieCard/> */}
  
  </StrictMode>,
)
