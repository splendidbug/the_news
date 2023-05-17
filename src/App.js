import {Routes, Route} from 'react-router-dom'
import {Home} from './components/pages/Home'
import {About} from './components/pages/About'
import {Navbar} from './components/Navbar'
import {US} from './components/pages/US'
import {Local} from './components/pages/Local'
import {Technology} from './components/pages/Technology'
import {World} from './components/pages/World'
import {Business} from './components/pages/Business'
import {Entertainment} from './components/pages/Entertainment'
import {Following} from './components/pages/Following'

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path ='/' element={<Home />}></Route>
            <Route path ='about' element={<About/>}></Route>
            <Route path ='US' element={<US />}></Route>
            <Route path ='Local' element={<Local/>}></Route>
            <Route path ='Technology' element={<Technology />}></Route>
            <Route path ='World' element={<World/>}></Route>
            <Route path ='Business' element={<Business />}></Route>
            <Route path ='Entertainment' element={<Entertainment/>}></Route>
            <Route path ='Following' element={<Following/>}></Route>
        </Routes>
    </>
  )
}

export default App;
