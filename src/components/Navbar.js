import {NavLink, Link} from 'react-router-dom';
import './css_files/navbar.css';

const navigation_items = [
  { name: 'Home', href: '/'},
  { name: 'Following', href: '/Following'},
  { name: 'U.S.....', href: '/US'},
  { name: 'World', href: '/World'},
  { name: 'Localllll', href: '/Local'},
  { name: 'Business', href: '/Business'},
  { name: 'Technology', href: '/Technology'},
  { name: 'Entertainment', href: '/Entertainment'},
]

export const Navbar = () => {
    return (
        <header class="header sticky">
          <div class="grid">
            <nav class="navigation">
              <ul class="navigation__list">
                  {navigation_items.map((item) => (
                    <NavLink to= {item.href}
                    className={({isActive})=>{
                        return(
                        isActive ? 'active_link' : 'inactive_link')
                    }}> {item.name} </NavLink>
                  ))}
              </ul>
            </nav>
          </div>
        </header>
    )
}