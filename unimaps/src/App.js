import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


class MapScreen extends Component {
  componentDidMount() {
    window.wheelzoom(this.e, { zoom: 0.1, maxZoom: 10 })
  }
  render() {
    let andar = this.props.match.params.id;
    const max=4, min=1;
    if(this.e){
      window.triggerEvent(this.e, 'wheelzoom.destroy');
    }
    window.wheelzoom(this.e, { zoom: 0.1, maxZoom: 10 })
    return (<div>
      <div id="sidebar" className={this.state.menu && "active"}>



        <div className="opcoes">
          <div className="toggle-btn" onClick={() => this.toggleSidebar()}>
            <i className="fa fa-bars"></i>
          </div>

          <form action="">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Buscar" />
          </form>

          <div className="Niveis">
            {andar==max&&<i className="fa fa-arrow-circle-up" ></i>||<Link to={"/andar/" + (parseInt(andar)+1)}>
              <i className="fa fa-arrow-circle-up" ></i>
            </Link>}
            {andar==min&&<i className="fa fa-arrow-circle-down" ></i>||<Link to={"/andar/" + (andar-1)}>
              <i className="fa fa-arrow-circle-down" ></i>
            </Link>}
          </div>
        </div>


        <ul>
          <div className="brand-logo">
            <img src="/images/Logo.png" />
          </div>
          <li className="menu"><a href="">Home</a></li>
          <li className="menu"><a href="">Sobre</a></li>
          <li className="menu"><a href="">Contato</a></li>
          <li className="footer">&copy;2019</li>
        </ul>
      </div>

      <div className="mapa">
        <img src={"/images/andar-"+andar+".png"} ref={(e) => this.e = e} style={{ width: "100%", height: "99.6vh" }} />
      </div>
    </div>)
  }
  state = { menu: false, andar: 1 }

  toggleSidebar() {
    //document.getElementById("sidebar").classList.toggle('active')
    this.setState({ menu: !this.state.menu })
  }
}

class App extends Component {




  render() {
    return (
      <Router>
        <Route path="/" exact> <Link to="/andar/1"> 2345meia78 </Link> </Route>
        <Route path="/andar/:id" component={MapScreen} />
      </Router>

    );
  }
}

export default App;