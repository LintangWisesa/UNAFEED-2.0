import React, {Component} from 'react';
import axios from 'axios'
import SimpleStorage from "react-simple-storage";
import { Route, withRouter } from 'react-router-dom'

// komponen
import HomeNoLogin from './komponen/1HomeNoLogin'
import HomeLogin from './komponen/1HomeLogin'
import ProfilUser from './komponen/2ProfilUser'
import UnaStore from './komponen/3UnaStore'
import UnaSense from './komponen/4UnaSense'
import UserCart from './komponen/5UserCart'
import UnaPredict from './komponen/6UnaPredict'

class App extends Component {

  constructor(){
    super()
    this.state = {
      user: '', statusLogin: false,
      nama: '', email: '', password: ''
    }
  }

  namaInput = (event) => {
    this.setState({nama: event.target.value});
  }
  emailInput = (event) => {
    this.setState({email: event.target.value});
  }
  passInput = (event) => {
    this.setState({password: event.target.value});
  }

  login = () => {
    var url = 'http://localhost:1234/login'
    axios.post(url, {
      uemail: this.state.email,
      upassword: this.state.password
    }).then((x)=>{
      if (x.data.statusLogin == 'ok'){
        alert('Login sukses! Welcome to Unafeed 😊👌')
        this.setState({
          user: x.data.user,
          statusLogin: true,
          nama: '', email: '', password: ''
        })
        window.location.replace("/")
      } else {
        alert('Gagal login 😭 Silakan coba lagi 🙏')
      }
    }).catch((x)=>{
      alert('Maaf, gangguan koneksi 😭 Silakan coba lagi 🙏')
    })
  }

  signup = () => {
    var url = 'http://localhost:1234/signup'
    axios.post(url, {
      unama: this.state.nama,
      uemail: this.state.email,
      upassword: this.state.password
    }).then((x)=>{
      if (x.data.status == 'ok'){
        alert('Selamat, akun Anda sukses terdaftar! 😊👌')
        this.login()
      } else {
        alert('Gagal signup 😭 Silakan coba lagi 🙏')
      }
    }).catch((x)=>{
      alert('Maaf, gangguan koneksi 😭 Silakan coba lagi 🙏')
    })
  }

  logout = () => {
    this.setState({
      user: '',
      statusLogin: false
    })
    this.props.history.push("/")
  }

  render(){

    let header
    if (this.state.statusLogin){
      header = (
        <header>
          <div className="container-fluid">
            <div className="header d-md-flex justify-content-between align-items-center py-sm-4 py-3 px-xl-5 px-lg-3 px-2">
              <div id="logo">
                <h1><a className="" href="/">
                  <img src='/img/logo.png' width='160px'/>
                </a></h1>
              </div>
              <div className="nav_w3ls">
                <nav>
                  <label for="drop" className="toggle toogle-2">Menu</label>
                  <input type="checkbox" id="drop" />
                  <ul className="menu">
                    <li className="active">
                      <a href="/">
                        Beranda
                      </a>
                    </li>
                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                      <a href={`/unasense/${2611}`}>
                        <i className="fas fa-chart-line"></i>
                        &nbsp;UnaSense
                      </a>
                    </li>
                    <li>
                      <a href="/unaml">
                        <i className="fas fa-hat-wizard"></i>
                        &nbsp;UnaPredict
                      </a>
                    </li>
                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                      <a href="/unastore">
                        <i className="fas fa-store"></i>
                        &nbsp;UnaStore
                      </a>
                    </li>
                    {/* <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                      <label for="drop-2" className="toggle">
                        Dropdown
                        <span className="fa fa-angle-down" aria-hidden="true"></span>
                      </label>
                      <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                      <input type="checkbox" id="drop-2" />
                      <ul>
                        <li><a href="#best" className="drop-text">Healthy Food</a></li>
                        <li><a href="about.html" className="drop-text">Farmers</a></li>
                        <li><a href="#testi" className="drop-text">Testimonials</a></li>
                        <li><a href="#newsletter" className="drop-text">Newsletter</a></li>
                      </ul>
                    </li> */}
                    <li>
                      <a href="#footer">
                        Hubungi Kami
                      </a>
                    </li>
                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                      <a href={`/cart/${this.state.user.uid}`}>
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={this.state.user.ufoto} width='30px' className='rounded-circle'/>
                        &nbsp;{this.state.user.unama}&nbsp; 
                        <span className="fa fa-angle-down" aria-hidden="true"></span>
                      </a>
                      <input type="checkbox" id="drop-2" />
                      <ul>
                        <li>
                          <a href={`/profil`} className="drop-text">
                          <i className="fas fa-user"></i>
                          &nbsp;
                          Edit Profil
                          </a>
                        </li>
                        <li>
                          <a onClick={this.logout} href="" className="drop-text">
                          <i className="fas fa-sign-out-alt"></i>
                          &nbsp;
                          Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      )
    } else {
      header = (
        <header>
          <div className="container-fluid">
            <div className="header d-md-flex justify-content-between align-items-center py-sm-4 py-3 px-xl-5 px-lg-3 px-2">
              <div id="logo">
                <h1><a className="" href="/">
                  <img src='/img/logo.png' width='160px'/>
                </a></h1>
              </div>
              <div className="nav_w3ls">
                <nav>
                  <label for="drop" className="toggle toogle-2">Menu</label>
                  <input type="checkbox" id="drop" />
                  <ul className="menu">
                    <li className="active"><a href="#beranda">
                      Beranda
                    </a></li>
                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2"><a href="#layanan">
                      Layanan
                    </a></li>
                    <li><a href="#founder">
                      Tentang
                    </a></li>
                    {/* <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                      <label for="drop-2" className="toggle">
                        Dropdown
                        <span className="fa fa-angle-down" aria-hidden="true"></span>
                      </label>
                      <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                      <input type="checkbox" id="drop-2" />
                      <ul>
                        <li><a href="#best" className="drop-text">Healthy Food</a></li>
                        <li><a href="about.html" className="drop-text">Farmers</a></li>
                        <li><a href="#testi" className="drop-text">Testimonials</a></li>
                        <li><a href="#newsletter" className="drop-text">Newsletter</a></li>
                      </ul>
                    </li> */}
                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2"><a href="#footer">
                      Hubungi Kami
                    </a></li>
                    <li>
                      <label for="drop-2" className="toggle">
                        Login
                        <span className="fa fa-angle-down" aria-hidden="true"></span>
                      </label>
                      <a href="#">Login <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                      <input type="checkbox" id="drop-2" />
                      <ul>
                        <li>
                          <a data-toggle="modal" data-target="#modalLogin" href="#best" className="drop-text">
                          <i className="fas fa-user"></i>
                          &nbsp;
                          Login
                          </a>
                        </li>
                        <li>
                          <a data-toggle="modal" data-target="#modalSignup" href="about.html" className="drop-text">
                          <i className="fas fa-clipboard-check"></i>
                          &nbsp;
                          Signup
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      )
    }

    return (
      <div>
        
        <SimpleStorage parent={this} />

        {header}        

        {/* modal login */}
        <div className="mt-5 modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title font-weight-bold" id="exampleModalLabel">
                  User Login
                  <i className="mx-2 fas fa-user"></i>
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                
                {/* input email */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input value={this.state.email} onChange={this.emailInput} 
                  type="text" className="form-control" placeholder="Email Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                {/* input password */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-unlock"></i>
                    </span>
                  </div>
                  <input value={this.state.password} onChange={this.passInput} 
                  type="password" className="form-control" placeholder="Password Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                  Batal
                  <i className="ml-2 fas fa-window-close"></i>
                </button>
                <button onClick={this.login} 
                type="button" className="btn btn-info">
                  Login
                  <i className="ml-2 fas fa-user"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal signup */}
        <div className="mt-5 modal fade" id="modalSignup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title font-weight-bold" id="exampleModalLabel">
                  User Signup
                  <i className="mx-2 fas fa-clipboard-check"></i>
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                {/* input nama */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input value={this.state.nama} onChange={this.namaInput} 
                  type="text" className="form-control" placeholder="Nama Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                {/* input email */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input value={this.state.email} onChange={this.emailInput}  
                  type="text" className="form-control" placeholder="Email Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                {/* input password */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-unlock"></i>
                    </span>
                  </div>
                  <input value={this.state.password} onChange={this.passInput}  
                  type="password" className="form-control" placeholder="Password Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                  Batal
                  <i className="ml-2 fas fa-window-close"></i>
                </button>
                <button onClick={this.signup} 
                type="button" className="btn btn-info">
                  Signup
                  <i className="ml-2 fas fa-clipboard-check"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Route exact path="/" component={(this.state.statusLogin) ? HomeLogin : HomeNoLogin}/>
          <Route path="/profil" render={(props) => <ProfilUser {...props} user={this.state.user} />}/>
          <Route path="/unastore" render={(props) => <UnaStore {...props} user={this.state.user} />}/>
          <Route path="/unasense/:iid" render={(props) => <UnaSense {...props} user={this.state.user} />}/>
          <Route path="/unaml" render={(props) => <UnaPredict {...props} user={this.state.user} />}/>
          <Route path="/cart/:uid" render={(props) => <UserCart {...props} user={this.state.user} />}/>
        </div>

      </div>
    );
  }
}

export default withRouter(App);
