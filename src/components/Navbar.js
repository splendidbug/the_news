import {Link} from 'react-router-dom';
import './navbar.css';
import './Navbar_script.js'
export const Navbar = () => {
    return (
        <header class="header sticky sticky--top">
          <div class="grid">
            <nav class="navigation">
              <ul class="navigation__list navigation__list--inline">
                <Link to='/' class="navigation__item"><a href="/" class="navigation__link navigation__link--is-active">Home</a></Link>
                <Link to='/Following' class="navigation__item">Following</Link>
                <Link to='/US' class="navigation__item">U.S.</Link>
                <Link to='/World' class="navigation__item">World</Link>
                <Link to='/Local' class="navigation__item">Local</Link>
                <Link to='/Business' class="navigation__item">Business</Link>
                <Link to='/Technology' class="navigation__item">Technology</Link>
                <Link to='/Entertainment' class="navigation__item">Entertainment</Link>
              </ul>
            </nav>
          </div>
        </header>
    )
}