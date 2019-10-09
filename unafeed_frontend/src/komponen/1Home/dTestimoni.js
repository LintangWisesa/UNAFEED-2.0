import React, {Component} from 'react'

class Testimoni extends Component {
    render(){
        return(
            <div>

            <div className="testimonials py-5" id="testi">
                <div className="container py-xl-5 py-lg-3">
                    <h3 className="title-w3 mb-5 text-wh font-weight-bold">
                        Testimoni
                        {/* <span>Apa Kata Pengguna Unafeed</span> */}
                    </h3>
                    <div className="carousel-inner">
                        <div className="row">
                            <div className="col-lg-6 w3_testimonials_grid">
                                <div className="bg-wh p-sm-5 p-4">
                                    <p className="sub-test-w3ls">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod possimus, omnis voluptas.
                                    </p>
                                    <div className="row mt-5">
                                        <div className="col-3 testi-img-res">
                                            <img src="images/te1.jpg" alt=" " className="img-fluid" />
                                        </div>
                                        <div className="col-9 w3_testi_grid mt-xl-3 mt-lg-2 mt-md-4 mt-2">
                                            <h5 className="mb-2">Thomas Carl</h5>
                                            <p>Sed do eiusmod</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 w3_testimonials_grid mt-lg-0 mt-4">
                                <div className="bg-wh p-sm-5 p-4">
                                    <p className="sub-test-w3ls">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod possimus, omnis voluptas.
                                    </p>
                                    <div className="row mt-5">
                                        <div className="col-3 testi-img-res">
                                            <img src="images/te2.jpg" alt=" " className="img-fluid" />
                                        </div>
                                        <div className="col-9 w3_testi_grid  mt-xl-3 mt-lg-2 mt-md-4 mt-2">
                                            <h5 className="mb-2">Adam Ster</h5>
                                            <p>Sed do eiusmod</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
        )
    }
}

export default Testimoni