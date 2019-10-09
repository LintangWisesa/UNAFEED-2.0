import React, {Component} from 'react'

class Banner extends Component{
    render(){
        return(
        // banner
        <div id='beranda' className="mybanner main-w3pvt">
            <div style={{marginTop: '100px', marginBottom: '100px'}} 
            className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 style-banner">
                        <div className="style-banner-inner">
                            <h3 className="font-weight-bold text-uppercase">
                                Otomasi budidaya sidat
                                So pasti untung berlipat
                            </h3>
                            <p className="mt-3">Tingkatkan kualitas peternakan sidat Anda bersama <b>Unafeed</b></p>
                            <a href="about.html" className="btn button-style mt-sm-5 mt-4">
                                Selengkapnya
                                &nbsp;
                                <i class="fas fa-angle-double-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 img-banner-w3 text-center">
                        <div className="csslider infinity" id="slider1">
                            <input type="radio" name="slides" checked="checked" id="slides_1" />
                            <ul className="banner_slide_bg">
                                <li>
                                    <img src="img/sidat4.png" alt="" className="img-fluid"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Banner