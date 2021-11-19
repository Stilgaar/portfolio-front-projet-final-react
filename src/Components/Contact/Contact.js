import './Contact.css'

function Contact() {
    return (
        <div className="competence-elem" id="contact"> <div className="competence-barre-elem"> <p> Contact </p></div>
            <div className="contact-container">

                <div className="contact-message">Laissez moi un message, je vous répondrais le plus rapidement possible.</div>
                <div className="contact-inputs-global">
                    <div className="contact-input-nom-email">
                        <div className="contact-input-nom">
                        <label>Nom et Prènom </label>
                        <input type="text" placeholder="Jean Dupont" />
                        </div>
                        <div className="contact-input-mail">
                        <label>Email </label>
                        <input type="text" placeholder="jean.d@aquarium.com" />
                        </div>
                    </div>
                    <div className="contact-input-titre-message">
                    <label>Titre ? (optionel) </label>
                    <input type="text" placeholder="Titre de votre message" />

                    <label>Message </label>
                    <textarea cols="20" rows="7" placeholder="Message"></textarea>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;