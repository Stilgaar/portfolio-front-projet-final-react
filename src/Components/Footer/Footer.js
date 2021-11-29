import './Footer.css'
import git from '../Acceuil/img/git.png'
import lin from '../Acceuil/img/in.png'

function Footer() {

    return (
        <footer >
            <div className="pieddepage">
            <div className="pieddepage-start">Jean-François van Straelen &copy; 2021</div> 
            <div className="pieddepage-end">
            <a href="https://github.com/Stilgaar" target="_blank" rel="noreferrer nofollow"><img src={git} alt="github" /></a>
            <a href="https://www.linkedin.com/in/jeffvanstraelen/" target="_blank" rel="noreferrer nofollow"><img src={lin} alt="linkedin" /></a>
            </div>
           </div>
        </footer>
    )
}

export default Footer;