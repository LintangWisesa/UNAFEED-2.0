import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'

class UnaML extends Component{

    render(){

        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            UnaPredict
                        </h3>
                        <p>Manfaatkan model machine learning kami untuk memaksimalkan hasil budidaya sidat Anda</p>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            <div className="col-lg-4 col-sm-6">
                                <div className="box20">
                                    <img src="img/sidat2.png" alt="" className="img-fluid" />
                                    <div className="box-content">
                                        <h3 className="title">Klasifikasi</h3>
                                        <span className="post">Spesies</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="box20 active">
                                    <img src="img/sidat5.png" alt="" className="img-fluid" />
                                    <div className="box-content active">
                                        <h3 className="title">Prediksi</h3>
                                        <span className="post">Bobot Panen</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="box20">
                                    <img src="img/sidat6.png" alt="" className="img-fluid" />
                                    <div className="box-content">
                                        <h3 className="title">Klustering</h3>
                                        <span className="post">Habit Hewan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Footer/>

            </div>
        )
    }
}

export default UnaML