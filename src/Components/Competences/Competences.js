import './Competences.css';

function Competences() {

    return (
        <div className="competence-elem" id="comp"> <div className="competence-barre-elem"> <p> Compétences </p></div>
            <div className="globalElem">
                <div className="textBox">
                    <div className="textExt"> <p className="textElemExt devel">
                        <span className="titreText"> &bull; Développement </span>
                        <br /> - HTML - CSS - JavaScript - React - Node.Js / Express - MongoDb - React Native - </p>
                    </div>

                    <div className="textExt"> <p className="textElemExt devel">
                        <span className="titreText"> &bull; Outils </span>
                        <br /> - Git - Visual Studio - Postman - Androïd Desktop - SCRUM - Office - Compass - 3T - </p>
                    </div>

                    <div className="textExt"> <p className="textElemExt photo">
                        <span className="titreText"> &bull; Photographie </span>
                        <br /> - Interieurs - Packshots - Evenemetiel - Lightroom - Mini Studio -</p>
                    </div>

                    <div className="textExt"> <p className="textElemExt langue">
                        <span className="titreText"> &bull; Langues </span>
                        <br /> - Français - Anglais - Flamant - Sarcasme - </p>
                    </div>

                    <div className="textExt"> <p className="textElemExt restauration">
                        <span className="titreText"> &bull; Restauration </span>
                        <br /> - Management - Service - Gestion des Stocks - Barman - Horraires impossibles -</p>
                    </div>

                    <div className="textExt"> <p className="textElemExt blogging">
                        <span className="titreText"> &bull; Blogging </span>
                        <br /> - SEO - Gestion des réseaux - Création de contenus - Environnement Wordpress - </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Competences;