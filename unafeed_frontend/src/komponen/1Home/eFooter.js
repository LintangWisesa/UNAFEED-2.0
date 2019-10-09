import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            <div id='footer'>

            <footer className="py-5">
                <div className="container pt-xl-5 pt-lg-3">
                    <div className="row pt-xl-5 pt-lg-3">
                        <div className="col-lg-5 col-md-7 w3l-footer mt-lg-3 text-md-left text-center">
                            <ul className="list-unstyled footer-nav-wthree">
                                <li className="mr-4">
                                    <a href="#beranda" className="active">Beranda</a>
                                </li>
                                <li className="mr-4">
                                    <a className="" href="#layanan">Layanan</a>
                                </li>
                                <li className="mr-4">
                                    <a className="" href="#founder">Tentang</a>
                                </li>
                                <li>
                                    <a className="" href="#footer">Hubungi Kami</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-7 col-md-5 w3social-icons text-md-right text-center mt-md-0 mt-3">
                            <ul>
                                <li className='px-2'>
                                    <a href="#" className="rounded-circle">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className='px-2'>
                                    <a href="#" className="rounded-circle">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className='px-2'>
                                    <a href="#" className="rounded-circle">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className='px-2'>
                                    <a href="#" className="rounded-circle">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pt-lg-4 pt-3 text-md-left text-center">
                        <p className="col-xl-7 col-lg-8 copy-right-grids mt-lg-1">© 2019 Unafeed</p>
                    </div>
                </div>
            </footer>
                
            </div>
        )
    }
}

export default Footer