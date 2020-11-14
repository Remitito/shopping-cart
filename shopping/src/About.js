import './App.css';
import React, {Component} from "react"

class About extends Component {
    onColor = (e) => {
        e.target.style.color = "silver"
    }

    offColor = (e) => {
        e.target.style.color = "white"
    }

    render () {
    return (
        <div id="aboutMain">
            <h1 className="headers">Home</h1>
            <div id="aboutCont">
            <p>This is a practice project</p>
<label>
Background by  <a onMouseOver={this.onColor} onMouseOut={this.offColor} style={{textDecoration: 'none', color: "white"}} href="https://www.pexels.com/@francesco-ungaro">Francesco Ungaro </a> 
from <a onMouseOver={this.onColor} onMouseOut={this.offColor} style={{textDecoration: 'none', color: "white"}} href="https://www.pexels.com/">Pexels</a>
<br/>
<br/>Photos by<a onMouseOver={this.onColor} onMouseOut={this.offColor} style={{textDecoration: 'none', color: "white"}} href="https://www.pexels.com/@pixabay"> Pixabay, 
</a><a onMouseOver={this.onColor} onMouseOut={this.offColor} style={{textDecoration: 'none', color: "white"}} href="https://www.pexels.com/@murat-esibatir-156560"> Murat Esibatir, 
</a><a onMouseOver={this.onColor} onMouseOut={this.offColor} style={{textDecoration: 'none', color: "white"}} href="https://www.pexels.com/@theyshane"> and Shane </a>
from <a onMouseOver={this.onColor} onMouseOut={this.offColor} style={{textDecoration: 'none', color: "white"}} href="https://www.pexels.com/">Pexels</a>
</label>
</div>
        </div>
    )
    }
}

export default About;