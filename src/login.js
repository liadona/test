import React, { Component } from 'react';
import { Textfield, Button } from 'react-mdl';
import App from './App'


class Login extends Component {
  render() {
    return(

            <div><h2 className="imgcontainer">Silahkan Login</h2>
                <form>
                    <div className="container">
                        <div>
                            <Textfield
                            onChange={() => {}}
                            label="Username"
                            style={{width: '500px'}}
                            color= "Blue"
                            type="text" placeholder="Masukkan User Anda" name="uname" required/>
                        </div>

                        <div>
                            <Textfield
                            onChange={() => {}}
                            label="Password"
                            style={{width: '500px'}}
                            type="password" placeholder="Masukkan Password Anda" name="psw" required/>
                        </div>

                        <div>
                            <button type="submit" className="logbutton">Login</button>
                            <input type="checkbox" defaultChecked/> Remember me
                        </div>
                            <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                            <button type="button" className="cancelbtn">Batal</button>
                            <span className="psw">Lupa <a href="#">password?</a></span>
                            </div>

                  </div>
              </form>
          </div>
    )
  }
}
export default Login;
