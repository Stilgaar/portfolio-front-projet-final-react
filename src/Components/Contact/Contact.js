import './Contact.css'
import cv from './CV-JeffvanStraelen.pdf'
import imprim from './cv-jean-francoisvanstraelen-imprimer.pdf'
import useSubmit from '../../Hooks/useSubmit'

function Contact() {

    let url = "https://jeffvanstraelenback.osc-fr1.scalingo.io/message"
    const [values, handleChange, handleSumbit, ok, setOk] = useSubmit(`${url}message`);

    return (
        <div className="competence-elem" id="contact"> <div className="competence-barre-elem"> <p> Contact </p></div>

            <div className="contact-container-container">
                <div className="contact-container">

                    <div className="contact-message">Laissez moi un message, je vous répondrai le plus rapidement possible.</div>
                    <form onSubmit={handleSumbit}>
                        <div className="contact-input-nom-email">
                            <div className="contact-input-nom">
                                <label>Nom et Prénom </label>
                                <input
                                    value={values.noms || ""}
                                    type="text"
                                    placeholder="Guillaume Graciet"
                                    required
                                    name="noms"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact-input-mail">
                                <label>Email </label>
                                <input
                                    value={values.email || ""}
                                    type="email"
                                    placeholder="guillaume.g@lebocal.academy"
                                    required
                                    name="email"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="contact-input-titre-message">
                            <label>Titre ? (optionel) </label>
                            <input
                                value={values.title || ""}
                                type="text"
                                placeholder="Titre de votre message"
                                name="title"
                                onChange={handleChange} />

                            <label>Message </label>
                            <textarea
                                value={values.message || ""}
                                type="text"
                                placeholder="Message"
                                name="message"
                                required
                                onChange={handleChange}></textarea>
                        </div>
                        {ok ? <div className="contact-message-send">Message envoyé. <br /> <button className="btn-envoyer" onClick={() => setOk(false)} > Autre message </button> </div>

                            :
                            <button className="btn-envoyer" type="submit">Envoyer</button>}

                    </form>
                </div>
                <div className="contact-container-contact">
                    <div className="contact-message-contact">Contact</div>
                    <div>Jean-François van Straelen</div>
                    <div>8 Allée des Jasmins, 06130 Grasse</div>
                    <div>06 63 87 77 90</div>
                    <div><a href="mailto:jeffvanstraelen@gmail.com">jeffvanstraelen@gmail.com</a></div>
                    <button className="btn"> <a href={cv} download>Téléchargez mon CV</a> </button>
                    <p><a href={imprim} target="_blank" rel="noreferrer">Version Imprimable</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;     