import './Competences.css';
import html from './img/html.png'
import js from './img/js.png'
import css from './img/css.png'
import node from './img/node.png'
import react from './img/react.png'
import mongo from './img/mongo.png'
import git from './img/git.png'
import VSC from './img/VSC.png'
import compas from './img/compas.png'
import t from './img/3t.png'
import scrum from './img/Scrum.png'
import post from './img/Postman.png'
import lr from './img/lr.png'
import off from './img/office.png'
import android from './img/Android.png'
import int from './img/1.jpg'
import pack from './img/1-2.jpg'
import enen from './img/1-3.jpg'
import studio from './img/1-4.jpg'
import ext from './img/1-5.jpg'
import tb from './img/tb.png'
import astoux from './img/astoux.png'
import boom from './img/boom.png';
import word from './img/word.png'
import SEO from './img/SEO.png'
import ici from './img/ici.jpg'

import { useState } from 'react';

function Competences() {

    const [dev, setDev] = useState(false);
    const [outil, setOutils] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [rest, setRest] = useState(false);
    const [blog, setBlog] = useState(false)

    return (
        <div className="competence-elem" id="comp"> <div className="competence-barre-elem"> <p> Compétences </p></div>
            <div className="globalElem">
                <div className="textBox">

                    <div className="textExt"> <p onClick={() => setDev(y => !y)} onMouseOver={() => setDev(true)} className="textElemExt">
                        <div className="titreText"> &bull; Développement </div>
                        <br /> - HTML - CSS - JavaScript - React - Node.Js / Express - MongoDb - React Native - </p>
                        {dev &&
                            <div className="image-logo-container">
                                <img className="image-logo" src={html} alt="HTML" />
                                <img className="image-logo" src={css} alt="CSS" />
                                <img className="image-logo" src={js} alt="Javascript" />
                                <img className="image-logo" src={react} alt="React" />
                                <img className="image-logo" src={node} alt="node" />
                                <img className="image-logo" src={mongo} alt="mongo" />
                            </div>}
                    </div>

                    <div className="textExt"> <p onClick={() => setOutils(y => !y)} onMouseOver={() => setOutils(true)} className="textElemExt">
                        <div className="titreText"> &bull; Outils </div>
                        <br /> - Git - Visual Studio - Postman - Androïd Studio - SCRUM - Office - Compass - 3T - LightRoom -</p>
                        {outil &&
                            <div className="image-logo-container">
                                <img className="image-logo" src={git} alt="git" />
                                <img className="image-logo" src={VSC} alt="visual studio code" />
                                <img className="image-logo" src={post} alt="postman" />
                                <img className="image-logo" src={android} alt="android studio" />
                                <img className="image-logo" src={scrum} alt="methode scrum agile" />
                                <img className="image-logo" src={off} alt="microsoft office" />
                                <img className="image-logo" src={compas} alt="compass db" />
                                <img className="image-logo" src={t} alt="3t robots" />
                                <img className="image-logo" src={lr} alt="lightroom" />
                            </div>}
                    </div>

                    <div className="textExt"> <p onClick={() => setPhoto(y => !y)} onMouseOver={() => setPhoto(true)} className="textElemExt">
                        <div className="titreText"> &bull; Photographie </div>
                        <br /> - Interieurs - Packshots - Evenemetiel - Mini Studio - Packshot exterieures - </p>
                        {photo &&
                            <div className="image-photo-container">
                                <a href="https://www.jeffphoto.fr/packshot-epicerie-en-vrac-photographe-region-cannoise-paca-photo/" target="_blank" rel="noreferrer" ><img className="comp-img-a" src={pack} alt="packshots produits" /></a>
                                <a href="https://www.jeffphoto.fr/evenementiel/" target="_blank" rel="noreferrer" ><img className="comp-img-a" src={enen} alt="evenementiel" /></a>
                                <a href="https://www.jeffphoto.fr/photographie-culinaire-photographe-food-photographe-cannes-grasse-antibes-mougins-mouanssartoutx-paca/" target="_blank" rel="noreferrer" ><img className="comp-img-a" src={studio} alt="photos studios" /></a>
                                <a href="https://www.jeffphoto.fr/photographe-photo-produit-exterieur/" target="_blank" rel="noreferrer" ><img className="comp-img-a" src={ext} alt="packshot exterieure" /></a>
                                <a href="https://www.jeffphoto.fr/interieurs-locaux-commerciaux-photographe-photo-region-cannoise-cannes-06-paca/" target="_blank" rel="noreferrer" ><img className="comp-img-a" src={int} alt="photos interieures" /></a>
                            </div>}
                    </div>

                    <div className="textExt"> <p onClick={() => setBlog(y => !y)} onMouseOver={() => setBlog(true)} className="textElemExt">
                        <div className="titreText" id="blog"> &bull; Blogging </div>
                        <br /> - SEO - Gestion des réseaux - Création de contenus - Environnement Wordpress - </p>
                        {blog &&
                            <div className="image-logo-container">
                                <img className="image-logo" src={SEO} alt="SEO" />
                                <img className="image-logo" src={word} alt="wordpress" />
                                <a className="imageA" href="https://www.icietlabas.fr"><img className="image-logo-ici" src={ici} alt="Ici et là bas blog voyage" /></a>
                            </div>}
                    </div>

                    <div className="textExt"> <p onClick={() => setRest(y => !y)} onMouseOver={() => setRest(true)} className="textElemExt">
                        <div className="titreText"> &bull; Restauration & Services </div>
                        <br /> - Management - Service - Gestion des Stocks - Barman - Horraires impossibles -</p>
                        {rest &&
                            <div className="image-logo-container">
                                <a className="imageA" href="https://www.le-train-bleu.com/fr/" target="_blank" rel="noreferrer nofollow" ><img className="comp-img-a" src={tb} alt="restaurant le train bleu" /></a>
                                <a className="imageA" href="https://www.astouxbrun.com/" target="_blank" rel="noreferrer nofollow" ><img className="comp-img-a" src={astoux} alt="restaurant Astoux et Brun Cannes" /></a>
                                <a className="imageA" href="https://www.boomerang.bio/" target="_blank" rel="noreferrer nofollow" ><img className="comp-img-a" src={boom} alt="boutique boomerang zéro déchets" /></a>
                            </div>}
                    </div>

                    <div className="textExt"> <p className="textElemExt">
                        <div className="titreText"> &bull; Langues</div>
                        <br /> - Français - Anglais - Flamant - Sarcasme - </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Competences;