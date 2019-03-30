import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { Layout, Header, Content, Navigation, Textfield, Drawer } from 'react-mdl';
import Home from './home';
import Login from './login';
import Mycoin from './mycoin';
import Kategori from './kategori';
import Live from './live';
import Lelang from './lelang';
import Pengaturan from './pengaturan';
import Logout from './logout';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
            <Header className="header-color" title="DaganganKu" scroll>
              <Textfield
                    value=""
                    onChange={() => {}}
                    label="Expandable Input"
                    expandable
                    expandableIcon="search" />

                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
                </Navigation>
              </Header>
              <Drawer title="Menu">
                <Navigation>
                  <Link to="/mycoin">MyCoin</Link>
                  <Link to="/kategori">Kategori</Link>
                  <Link to="/live">live</Link>
                  <Link to="/lelang">Lelang</Link>
                  <Link to="/pengaturan">Pengaturan</Link>
                  <Link to="/logout">Log Out</Link>
                </Navigation>
              </Drawer>
                <main>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/mycoin"exact component={Mycoin} />
                  <Route path="/kategori" exact component={Kategori} />
                  <Route path="/live" exact component={Live} />
                  <Route path="/lelang" exact component={Lelang} />
                  <Route path="/pengaturan" exact component={Pengaturan} />
                  <Route path="/logout" exact component={Logout} />
                </main>
              </Layout>
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
