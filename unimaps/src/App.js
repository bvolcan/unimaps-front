import React, { Component } from 'react';

class App extends Component {
  state={menu:false}

  toggleSidebar(){
    //document.getElementById("sidebar").classList.toggle('active')
    this.setState({menu:!this.state.menu})
  }
  
  componentDidMount(){
    window.wheelzoom(this.e, {zoom: 0.1, maxZoom: 10})
  }

  render() {
    return (
      <div>
      <div id="sidebar" className={this.state.menu&&"active"}>
          


          <div className="opcoes">
          <div className="toggle-btn" onClick={()=>this.toggleSidebar()}>
              <i className="fa fa-bars"></i>
          </div>

              <form action="">
                  <i className="fa fa-search"></i>
                  <input type="text" placeholder="Buscar"/>
              </form>

              <div className="Niveis">
                  <i className="fa fa-arrow-circle-up"></i>
                  <i className="fa fa-arrow-circle-down"></i>
              </div>
          </div>


          <ul>
              <div className="brand-logo">
                  <img src="images/Logo.png"/>
              </div>
              <li className="menu"><a href="">Home</a></li>
              <li className="menu"><a href="">Sobre</a></li>
              <li className="menu"><a href="">Contato</a></li>
              <li className="footer">&copy;2019</li>
          </ul>
      </div>

      <div className="mapa">
          <img src="images/andar1-1.png" ref={(e)=> this.e=e} style={{width: "100%", height: "99.6vh"}} />
  </div>
  </div>

    );
  }
}

export default App;
