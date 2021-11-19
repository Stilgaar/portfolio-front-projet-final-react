import { useState } from 'react';
import './Navigation.css';
import menuup from './menu-up.svg';

function NavBar() {

    const [menu, setMenu] = useState(false)

    return (

        <nav>
            <div className="navigation">
                <div className="navigation-start">Jean-François van Straelen Portfolio</div>
                <div className="navigation-end">
                    <div className="navigation-element"><a href="#acceuil">Acceuil</a></div>
                    <div className="navigation-element"><a href="#comp">Compétences</a></div>
                    <div className="navigation-element"><a href="#port">Portfolio</a></div>
                    <div className="navigation-element"><a href="#contact">Contact</a></div>
                </div>
            </div>

            <div className="navigation-cachee">
                <div className="navigation-start-cachee"> <p>Jeff van Straelen<br/>Portfolio</p></div>
                {menu ?
                    <div>
                        <img src={menuup} onClick={() => setMenu(y => !y)} className="burgermenulogo" alt="" />
                        <div className="navigation-cachee-end">
                            <div className="navigation-element-cachee"><a onClick={() => setMenu(y => !y)} href="#acceuil">Acceuil</a></div>
                            <div className="navigation-element-cachee"><a onClick={() => setMenu(y => !y)} href="#comp">Compétences</a></div>
                            <div className="navigation-element-cachee"><a onClick={() => setMenu(y => !y)} href="#port">Portfolio</a></div>
                            <div className="navigation-element-cachee"><a onClick={() => setMenu(y => !y)} href="#contact">Contact</a></div>
                        </div>
                    </div> :
                    <div>
                        <img src={menuup} onClick={() => setMenu(y => !y)} className="burgermenulogo" alt="" />
                    </div>
                } </div>
        </nav>
    )
}

export default NavBar;