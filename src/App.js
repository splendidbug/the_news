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

const navigation_items = [
  { element: Home, href: '/'},
  { element: Following, href: '/Following'},
  { element: US, href: '/US'},
  { element: World, href: '/World'},
  { element: Local, href: '/Local'},
  { element: Business, href: '/Business'},
  { element: Technology, href: '/Technology'},
  { element: Entertainment, href: '/Entertainment'},
]


function App() {
  return (
    <>
        <Navbar />
        <Routes>
            {navigation_items.map((item) => (
                <Route path ={item.href} element={<item.element />}></Route>
            ))}
        </Routes>
    </>
  )
}

export default App;
