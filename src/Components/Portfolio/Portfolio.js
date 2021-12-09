import './Portfolio.css';
import { Helmet } from "react-helmet";
import guit from './img/guit.jpg'
import livre from './img/livre.jpg'
import todo from './img/todo.jpg'
import to from './img/to.jpg'
import cafe from './img/cafe.jpg'
import up from './img/upe.jpg'
import gats from './img/gats.JPG'

function Portfolio() {


    return (
        <div className="competence-elem" id="port"> <div className="portfolio-barre-elem"> <p> Portfolio </p></div>
            <div className="portfolios-subtitles">Sites et Applications Web</div>
            <div className="portfolio-container">

                <div className="porfolio-element-uno">
                    <div className="portfolio-element-uno">
                        <h3>  <span className="portfolio-titre"> UpdownStreet </span><br />
                            Techno: Appli web MERN</h3>
                        <a href="https://uppertown.osc-fr1.scalingo.io/" target="_blank" rel="noreferrer nofollow" >
                            <img src={up} alt="" />
                        </a>
                        <p>Proof of concept -  FullStack MERN <br />
                            Novembre 2021</p>
                    </div>
                </div>

                <div className="porfolio-element-trio">
                    <div className="portfolio-element">
                        <h3>  <span className="portfolio-titre"> Delivrium</span> <br />
                            Techno : Appli Web MERN</h3>
                        <a href="https://delivriumfront.osc-fr1.scalingo.io/" target="_blank" rel="noreferrer nofollow" >
                            <img src={livre} alt="" />
                        </a>
                        <p>Premier projet MERN complet <br />
                            Octobre 2021</p>
                    </div>

                    <div className="portfolio-element">
                        <h3> <span className="portfolio-titre">PortFolio</span><br />
                            Techno : MERNGG (Gatsby-GraphQL) </h3>
                        <a href="https://naughty-wescoff-07195c.netlify.app/" target="_blank" rel="noreferrer nofollow" >
                            <img src={gats} alt="Portfolio en Gatsby" />
                        </a>
                        <p>Portfolio - Autodidacte<br />Decembre 2021</p>
                    </div>

                    <div className="portfolio-element">
                        <h3>  <span className="portfolio-titre"> Café de la place</span> <br />
                            Techno : React Js</h3>
                        <a href="https://cafedelaplace.osc-fr1.scalingo.io/" target="_blank" rel="noreferrer nofollow" >
                            <img src={cafe} alt="cafe de la place react" />
                        </a>
                        <p>Js vanillia & React.js <br />
                            Septembre 2021
                        </p>
                    </div>
                </div>

                <div className="porfolio-element-trio">

                    <div className="portfolio-element">
                        <h3> <span className="portfolio-titre"> To Do List</span><br />
                            Techno : ReactJs</h3>
                        <a href="https://todolist-react.osc-fr1.scalingo.io" target="_blank" rel="noreferrer nofollow" >
                            <img src={to} alt="TO DO LIST Javascript vanillia" />
                        </a>
                        <p>Approfondissement React<br />
                            Septembre 2021</p>
                    </div>


                    <div className="portfolio-element">
                        <h3> <span className="portfolio-titre"> To Do List</span><br />
                            Techno : JavaScript Vanillia</h3>
                        <a href="https://stilgaar.github.io/to-do-list-javascript-vanillia/" target="_blank" rel="noreferrer nofollow" >
                            <img src={todo} alt="TO DO LIST Javascript vanillia" />
                        </a>
                        <p>Premier projet JavaScript<br />
                            Septembre 2021</p>
                    </div>

                    <div className="portfolio-element">
                        <h3> <span className="portfolio-titre"> The R'Guitar Shop</span><br />
                            Techno : HTML CSS </h3>
                        <a href="https://stilgaar.github.io/air-guitarTp-HTML-CSS/" target="_blank" rel="noreferrer nofollow" >
                            <img src={guit} alt="Guitare HTML" />
                        </a>
                        <p>Premier projet HTML/CSS <br /> Septembre 2021</p>
                    </div>
                </div>
            </div>

            <div className="portfolios-subtitles">Applications Mobiles</div>
            <div className="portfolio-container">
                <div className="portfolio-element">
                    <h3> <span className="portfolio-titre"> Application Meteo</span><br />
                        Techno : React Native </h3>
                    <div className="snacks" data-snack-id="@stilgar/application-meteo-react-native" data-snack-preview="true" data-snack-theme="dark"></div>
                    <Helmet>
                        <script async src="https://snack.expo.dev/embed.js"></script>
                    </Helmet>
                </div>

                <div className="portfolio-element">
                    <h3> <span className="portfolio-titre"> Application Delivrium</span><br />
                        Techno : Appli mobile MERN </h3>
                    <div className="snacks" data-snack-id="@stilgar/delivrium" data-snack-preview="true" data-snack-theme="dark"></div>
                    <Helmet>
                        <script async src="https://snack.expo.dev/embed.js"></script>
                    </Helmet>
                </div>







            </div>
        </div>
    )
}

export default Portfolio;