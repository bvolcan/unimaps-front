import React, { Component } from 'react';
import FloorList from "./FloorList";
import Modal from "react-modal";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";



class MapScreen extends Component {
  componentDidMount() {
    window.wheelzoom(this.e, { zoom: 0.1, maxZoom: 10 })
  }
  render() {
    let custom={content:{top:"50%", left:"50%", right:"auto", bottom:"auto", marginRight: "-50%", transform: 'translate(-50%, -50%)'}}
    let andar = this.props.match.params.id;
    const max = 4, min = 1;
    if (this.e) {
      window.triggerEvent(this.e, 'wheelzoom.destroy');
    }
    window.wheelzoom(this.e, { zoom: 0.1, maxZoom: 10 })
    return (<div>
      <Modal isOpen={this.state.open} onRequestClose={() => this.setState({ open: false })} style={custom}>
        <p>
          Sobre: Aplicativo web feito por trainees da Hut8.
        </p>
      </Modal>
      <Modal isOpen={this.state.open2} onRequestClose={() => this.setState({ open2: false })} style={custom}>
          
          <form>
          <span>
          Contato:
          </span>
          <input></input>
          <br></br>
          <br></br>
          <span>
          Mensagem:
          </span>
          <input></input>
          </form>
          
      </Modal>
      <div id="sidebar" className={this.state.menu && "active"}>



        <div className="opcoes">
          <div className="toggle-btn" onClick={() => this.toggleSidebar()}>
            <i className="fa fa-bars"></i>
          </div>

          <form action="">
            <i className="fa fa-search"></i>
            <div className="dropdown">
              <button className="dropbtn">
                Anglo
              </button>
              <div className="dropdown-content">
                <div className="submenu"><button className="dropbtn" >Anglo</button><div className="dropdown-content"><a href="/andar/1">Primeiro andar</a><a href="/andar/2">Segundo andar</a><a href="/andar/3">Terceiro andar</a><a href="/andar/4">Quarto andar</a></div></div>
                <div className="submenu"><button className="dropbtn" >Capao</button><div className="dropdown-content"><a href="/andar/1">Primeiro andar</a><a href="/andar/2">Segundo andar</a><a href="/andar/3">Terceiro andar</a><a href="/andar/4">Quarto andar</a></div></div>
                <div className="submenu"><button className="dropbtn" >ICH</button><div className="dropdown-content"><a href="/andar/1">Primeiro andar</a><a href="/andar/2">Segundo andar</a><a href="/andar/3">Terceiro andar</a><a href="/andar/4">Quarto andar</a></div></div>
                <div className="submenu"><button className="dropbtn" >Cotada</button><div className="dropdown-content"><a href="/andar/1">Primeiro andar</a><a href="/andar/2">Segundo andar</a><a href="/andar/3">Terceiro andar</a><a href="/andar/4">Quarto andar</a></div></div>
                <div className="submenu"><button className="dropbtn" >Direito</button><div className="dropdown-content"><a href="/andar/1">Primeiro andar</a><a href="/andar/2">Segundo andar</a><a href="/andar/3">Terceiro andar</a><a href="/andar/4">Quarto andar</a></div></div>
                <div className="submenu"><button className="dropbtn" >Leiga</button><div className="dropdown-content"><a href="/andar/1">Primeiro andar</a><a href="/andar/2">Segundo andar</a><a href="/andar/3">Terceiro andar</a><a href="/andar/4">Quarto andar</a></div></div>
              </div>
            </div>
          </form>

          <div className="Niveis">
            {andar == max && <i className="fa fa-arrow-circle-up" ></i> || <a href={"/andar/" + (parseInt(andar) + 1)}>
              <i className="fa fa-arrow-circle-up" ></i>
            </a>}
            {andar == min && <i className="fa fa-arrow-circle-down" ></i> || <a href={"/andar/" + (andar - 1)}>
              <i className="fa fa-arrow-circle-down" ></i>
            </a>}
          </div>
        </div>


        <ul>
          <div className="brand-logo">
            <img src="/images/Logo.png" />
          </div>
          <li className="menu"><a href="">Home</a></li>
          <li className="menu"><a onClick={()=>this.setState({ open: true })}>Sobre</a></li>
          <li className="menu"><a onClick={()=>this.setState({ open2: true })}>Contato</a></li>
          <li className="footer">&copy;2019</li>
        </ul>
      </div>

      <div className="mapa">
        <img src={"/images/andar-" + andar + ".png"} ref={(e) => this.e = e} style={{ width: "100%", height: "99.6vh" }} />
      </div>

      <div className={"BottomBar" + (this.state.bottom && " active" || "")}>
        <button onClick={() => this.toggleBottom()}><i className="fa fa-bars"></i></button>
        <div className="BottomBar-content">
          <li>Informações do Andar:</li>
          <FloorList andar={andar} />
        </div>
      </div>

    </div>)
  }
  state = { menu: false, andar: 1, bottom: false }

  toggleSidebar() {
    this.setState({ menu: !this.state.menu })
  }
  toggleBottom() {
    this.setState({ bottom: !this.state.bottom })
  }

}



class App extends Component {




  render() {
    return (
      <Router>
        <Route path="/" exact> <Redirect from="/" to="/andar/1" /> </Route>
        <Route path="/andar/:id" component={MapScreen} />
      </Router>

    );
  }
}



export default App;