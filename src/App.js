import React, { Component } from 'react'
import './App.css'
import image from './profilePhoto.jpg'


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName : "Kays Meayan",
      bio : "This is my bio",
      imgSrc : image,
      profession : "I am a Full Stack JS Developer",
      show : false,
      interval : null,
      timer : 0
    }
  }
  
  toggleShow = () => {
    this.setState({
      show : !this.state.show
    })
  }

  buttonStyle = {width : "150px", backgroundColor : "#79bbff", padding :" 15px" , fontFamily : "Trebuchet MS",
                  fontSize: "20px", fontWeight : "bold", color: "white", background:"linear-gradient(to bottom, #79bbff 5%, #378de5 100%)",
                  cursor :"pointer", border : "1px solid #337bc4", marginTop : "25px"}
  imageStyle = {height : "400px", width : "270px", borderRadius : "50px 20px", margin :"25px"}
  infoStyle = {textTransform : "uppercase", fontSize : "30px", color : "#00A8CC"}
  messageStyle = {fontSize : "25px", color : "purple"}

  componentDidMount(){
    this.setState({
      interval : setInterval(() => {
        this.setState({timer : this.state.timer + 1})
      }, 60000)
    })
  }

  render() {
    return (
      <div className="App">
        <button style={this.buttonStyle} onClick={this.toggleShow}>{this.state.show ? "Hide Profile" : "Show Profile"}</button>
        {this.state.show ?
          (<div className="Profile">
            <div className="profileInfos">
              <h3 style={this.infoStyle}>{this.state.fullName}</h3>
              <h3 style={this.infoStyle}>{this.state.bio}</h3>
              <h3 style={this.infoStyle}>{this.state.profession}</h3>
            </div>
            <hr style={{margin :" 25px 50px", border : "1px solid #81b214"}}/>
            <div className="profilePhoto">
            <img style={this.imageStyle} src={this.state.imgSrc} alt="" />
            </div>  
        </div>) : (<h4 style={this.messageStyle}>Click on the button to show User Profile</h4>)
        }
        <h4 style={this.messageStyle}>Component Life Cycle : {this.state.timer} minutes</h4>
        
        
      </div>
    )
  }
}

export default App
