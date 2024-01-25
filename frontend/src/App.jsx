import './style.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './nav.jsx'
import Description from './description.jsx'
import Hebergement from './hebergements.jsx'
import Preview from './chambresPreview.jsx'
import Localisation from './localisation.jsx'
import Footer from './footer.jsx'
import Login from './login.jsx'
import SignUp from './signup.jsx'
import Chambres from './chambres.jsx'
import Reservation from './reservation.jsx'
import Success from './reservationSuccess.jsx'


function App() {

  return (
      <>
        <Routes>

          <Route path='' element={
            <>
              <Nav />
              <Description />
              <Hebergement />
              <Preview />
              <Localisation />
              <Footer />
            </> } />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='chambres' element={
            <>
              <Nav />
              <Chambres />
              <Footer />
            </> } />
          <Route path='reservation' element={
            <>
              <Nav />
              <Reservation />
              <Footer />
            </> } />
            <Route path='success' element={<div className="flex flex-col h-screen">
              <Nav />
              <Success />
              <Footer className="self-end"/>
            </div>} />
        </Routes>
      </>

  )
}

export default App
