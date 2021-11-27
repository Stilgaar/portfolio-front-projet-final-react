import './Acceuil.css'
import profile from './img/profile.png'
import git from './img/git.png'
import lin from './img/in.png'


function Acceuil() {
    return (
        <div className="acceuil-main-container" >


            <div className="acceuil-container">
                <div className="acceuil-single-box-text">
                    <div className="acceuil-dev">Developpeur FullStack JavaScript</div>
                    <div className="acceuil-element">39 ans</div>
                    <div className="acceuil-element">Grasse, Région PACA</div>
                    <div className="acceuil-element"><a href="mailto:jeffvanstraelen@gmail.com">jeffvanstraelen@gmail.com</a></div>
                    <div className="acceuil-element-text">
                        <br/>    
                     Après trois ans à mon compte en tant que Photographe ainsi qu'une dizaine d'années
                     en management dans la restauration, j'ai voulu me lancer dans une nouvelle Aventure.
                     Je me suis naturellement orienté vers un secteur me tendant les bras : le développement web.
                     Pour cette raison, j'ai suivi une formation bootcamp en distanciel au Bocal Academy de Nice</div>
                </div>
                <div className="acceuil-single-box-image">
                    <img className="acceuil-photo" src={profile} alt="alt" />
                    <div>
                        <div className="acceuil-icones">
                            <a href="https://github.com/Stilgaar" target="_blank" rel="noreferrer nofollow"><img src={git} alt="github" /></a>
                            <a href="https://www.linkedin.com/in/jeffvanstraelen/" target="_blank" rel="noreferrer nofollow"><img src={lin} alt="linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acceuil;

// &#x00028; (
// &#x00029; )
// &#x0003E; > 
// &#x0007B; {
// &#x0007D; }

//  <div className="acceuil-textdefilant"> const handleInput = &#x00028; &#x00029; =&#x0003E; &#x0007B;setter&#x00028;e.target.value &#x00029;&#x0007D; </div>