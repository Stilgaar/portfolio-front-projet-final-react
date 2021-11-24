import './Portfolio.css';
import guit from './img/guit.jpg'
import livre from './img/livre.jpg'
import todo from './img/todo.jpg'
import cafe from './img/cafe.jpg'
import up from './img/upe.jpg'

function Portfolio() {


    return (
        <div className="competence-elem" id="port"> <div className="portfolio-barre-elem"> <p> Portfolio </p></div>

            <div className="portfolio-container">

                <div className="portfolio-element">
                        <h3>The R'Guitar Shop <br />
                            Techno : HTML CSS </h3>
                        <a href="https://stilgaar.github.io/air-guitarTp-HTML-CSS/" target="_blank" rel="noreferrer nofollow" > <img src={guit} alt="Guitare HTML" /> </a>
                        <p>Premier projet HTML/CSS <br /> Septembre 2021</p>                
                    </div>
                    <div className="portfolio-element">
                        <h3>To Do List <br />
                            Techno : JavaScript Vanillia</h3>
                        <a href="https://stilgaar.github.io/to-do-list-javascript-vanillia/" target="_blank" rel="noreferrer nofollow" > <img src={todo} alt="TO DO LIST Javascript vanillia" /> </a>
                        <p>Premier projet JavaScript<br />
                            Septembre 2021</p>
                    </div>

                    <div className="portfolio-element">
                        <h3> Café de la place <br />
                            Techno : JavaScript Vanillia && React Js</h3>
                        <a href="https://cafedelaplace.osc-fr1.scalingo.io/" target="_blank" rel="noreferrer nofollow" > <img src={cafe} alt="cafe de la place react" /> </a>
                        <p>Crée en Js vanillia puis en React.js <br/>
                            Septembre 2021
                        </p>
                    </div>
                                                                                                
                    <div className="portfolio-element">
                        <h3> Delivrium <br />
                            Appli Web MERN && Appli Mobile MERnN</h3>
                        <a href="https://delivriumfront.osc-fr1.scalingo.io/" target="_blank" rel="noreferrer nofollow" > <img src={livre} alt="" /></a>
                        <p>Premier projet MERN complet <br/>
                        Octobre 2021</p>
                    </div>


                    <div className="portfolio-element">
                        <h3> UpdownStreet <br />
                            Techno : React.js, Node.js, Express.Js et MongoDB</h3>
                        <a href="port" target="_blank" rel="noreferrer nofollow" > <img src={up} alt="" /></a>
                        <p>PoC FullStack MERN <br/>
                        Novembre 2021</p>
                    </div>
                </div>
            </div>
            )
}

            export default Portfolio;