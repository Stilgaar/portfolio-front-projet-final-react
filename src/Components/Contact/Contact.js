import { useState } from 'react'
import './Contact.css'
import cv from './CV-Jean-Francois-van-Straelen.pdf'
const axios = require('axios')


function Contact() {

    const [sumbit, setSumbit] = useState({noms:"", email:"" , title: "", message:""})
    let url =  "https://jeffvanstraelenback.osc-fr1.scalingo.io/message" || "http://localhost:5000/message"
    const handleSubmit = (e) => {
        e.preventDefault();  
        e.target.reset();
        axios.post(url, sumbit).then((res) => console.log(res.data) ).catch((err) => console.log(err)) }

    return (
        <div className="competence-elem" id="contact"> <div className="competence-barre-elem"> <p> Contact </p></div>

            <div className="contact-container-container">
                <div className="contact-container">

                    <div className="contact-message">Laissez moi un message, je vous répondrai le plus rapidement possible.</div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="contact-input-nom-email">
                            <div className="contact-input-nom">
                                <label>Nom et Prénom </label>
                                <input type="text" placeholder="Guillaume Graciet" onChange={(e) => setSumbit({...sumbit, noms:e.target.value})} />
                            </div>
                            <div className="contact-input-mail">
                                <label>Email </label>
                                <input type="text" placeholder="guillaume.g@lebocal.academy" onChange={(e) => setSumbit({...sumbit, email:e.target.value})} />
                            </div>
                        </div>
                        <div className="contact-input-titre-message">
                            <label>Titre ? (optionel) </label>
                            <input type="text" placeholder="Titre de votre message" onChange={(e) => setSumbit({...sumbit, title:e.target.value})} />

                            <label>Message </label>
                            <textarea placeholder="Message" onChange={(e) => setSumbit({...sumbit, message:e.target.value})}></textarea>
                        </div>
                        <button className="btn-envoyer" type="submit">Envoyer</button>
                    </form>
                </div>
                <div className="contact-container-contact">
                    <div className="contact-message-contact">Contact</div>
                    <div>Jean-François van Straelen</div>
                    <div>8 Allée des Jasmins, 06130 Grasse</div>
                    <div>06 63 87 77 90</div>
                    <div><a href="mailto:jeffvanstraelen@gmail.com">jeffvanstraelen@gmail.com</a></div>
                    <button className="btn"> <a href={cv} download>Téléchargez mon CV</a> </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;     