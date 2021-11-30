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
                        <br />
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

/*  <div className="acceuil-textdefilant"> const handleInput = &#x00028; &#x00029; =&#x0003E; &#x0007B;setter&#x00028;e.target.value &#x00029;&#x0007D;
<br />
const adminData =  &#x0007B; <br/> <br/>
addRib &#x00028; req, res, next &#x00029;   &#x0007B; <br/>
let  &#x0007B;  titulaire, domiciliation, iban, codeBanque, codeGuichet, numeroCompte, clefRib, bicSwift  &#x0007D;  = req.body; <br/>
if  &#x00028; !titulaire || !domiciliation || !iban || !codeBanque || !codeGuichet || !numeroCompte || !clefRib || !bicSwift &#x00029;   &#x0007B;  return res.send &#x00028; "empty" &#x00029;   &#x0007D; <br/>
AdminModel.findOneAndUpdate &#x00028;  &#x0007B;  lerib: "01"  &#x0007D; , <br/>
&#x0007B;  $set:  &#x0007B; <br/>
titulaire: titulaire, domiciliation: domiciliation, iban: iban, codeBanque: codeBanque, codeGuichet: codeGuichet, numeroCompte: numeroCompte, clefRib: clefRib, bicSwift: bicSwift
&#x0007D; 
&#x0007D; , <br/>  &#x0007B;  new: true  &#x0007D; , <br/>  &#x00028; err, updatedRib &#x00029;  =&#x0003E;  &#x0007B;<br/> 
if  &#x00028; err &#x00029;   &#x0007B;  res.send &#x00028; err &#x00029;   &#x0007D; <br/> 
if  &#x00028; !updatedRib &#x00029;   &#x0007B; <br/> 
AdminModel.create &#x00028;  &#x0007B; <br/> 
titulaire, domiciliation, iban, codeBanque, codeGuichet, numeroCompte, clefRib, bicSwift<br/> 
&#x0007D;  &#x00029; .then &#x00028;  &#x00028; newRib &#x00029;  =&#x0003E; res.send &#x00028; newRib &#x00029;  &#x00029; <br/> 
.catch &#x00028;  &#x00028; err &#x00029;  =&#x0003E; res.send &#x00028; err &#x00029;  &#x00029; <br/> 
&#x0007D;  else  &#x0007B; res.send &#x00028; updatedRib &#x00029;  &#x0007D; <br/> 
&#x0007D;  &#x00029; <br/> 
&#x0007D; ,
</div> */ 