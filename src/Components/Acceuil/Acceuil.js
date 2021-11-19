import './Acceuil.css'

function Acceuil() {
    return (
        <div className="acceuil-main-container" id="acceuil">
            <div className="acceuil-container">
                <div className="acceuil-single-box-text">
                    <div className="acceuil-dev">Developpeur FullStack JavaScript <br /> Junior</div>
                    <div className="acceuil-element">Jean-François van Straelen, 39 ans</div>
                    <div className="acceuil-element">Grasse, Région PACA</div>
                    <div className="acceuil-element">Email : <a href="mailto:jeffvanstraelen@gmail.com">jeffvanstraelen@gmail.com</a></div>
                </div>
                <div className="acceuil-single-box-image">
                    <img className="acceuil-photo" src="./profile.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Acceuil;