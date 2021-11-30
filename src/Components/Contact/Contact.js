import { useState } from 'react'
import './Contact.css'
import cv from './CV-JeffvanStraelen.pdf'
import imprim from './cv-jean-francoisvanstraelen-imprimer.pdf'
const axios = require('axios')


function Contact() {

    const [sumbit, setSumbit] = useState({noms:"", email:"" , title: "", message:""})
    const [ok,setOk] = useState(false)
    let url =  "https://jeffvanstraelenback.osc-fr1.scalingo.io/message" || "http://localhost:5000/message"
    const handleSubmit = (e) => {
        e.preventDefault();  
        e.target.reset();
        axios.post(url, sumbit).then((res) => {if (res.data === 'done') {setOk(true)}} ).catch((err) => console.log(err)) }

    return (
        <div className="competence-elem" id="contact"> <div className="competence-barre-elem"> <p> Contact </p></div>

            <div className="contact-container-container">
                <div className="contact-container">

                    <div className="contact-message">Laissez moi un message, je vous répondrai le plus rapidement possible.</div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="contact-input-nom-email">
                            <div className="contact-input-nom">
                                <label>Nom et Prénom </label>
                                <input type="text" placeholder="Guillaume Graciet" required onChange={(e) => setSumbit({...sumbit, noms:e.target.value})} />
                            </div>
                            <div className="contact-input-mail">
                                <label>Email </label>
                                <input type="email" placeholder="guillaume.g@lebocal.academy" required onChange={(e) => setSumbit({...sumbit, email:e.target.value})} />
                            </div>
                        </div>
                        <div className="contact-input-titre-message">
                            <label>Titre ? (optionel) </label>
                            <input type="text" placeholder="Titre de votre message" onChange={(e) => setSumbit({...sumbit, title:e.target.value})} />

                            <label>Message </label>
                            <textarea placeholder="Message" required onChange={(e) => setSumbit({...sumbit, message:e.target.value})}></textarea>
                        </div>
                        {ok ? <div className="contact-message-send">Message envoyé. <br/> <button className="btn-envoyer" onClick={() => setOk(false)}> Autre message ? </button> </div> 
                        
                        :
                        <button className="btn-envoyer" type="submit">Envoyer</button>
                        }
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