import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { Layout, Content, Navigation } from 'react-mdl';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div> <hr />

                <Link to="/mycoin">Pakaian</Link> |
                <Link to="/kategori"> Pertanian</Link> |
                <Link to="/live"> Kecantikan</Link> |
                <Link to="/pengaturan"> Elektronik</Link> |
                <Link to="/logout">Buku</Link><hr />

            </div>
      </BrowserRouter>
    );
  }
}

export default App;
