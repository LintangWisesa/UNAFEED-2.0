import React, {Component} from 'react'

class Layanan extends Component{
    render(){
        return(
        <div id='layanan'>
        
        {/* layanan */}
        <section className="py-5 team-w3ls" id="best">
            <div className="container">
                <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                    Layanan Unafeed
                </h3>
                <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                    <div className="col-lg-4 col-sm-6">
                        <div className="box20">
                            <img src="img/jasa1.png" alt="" className="img-fluid" />
                            <div className="box-content">
                                <h3 className="title">Otomasi</h3>
                                <span className="post">pakan sidat</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="box20">
                            <img src="img/jasa2.png" alt="" className="img-fluid" />
                            <div className="box-content">
                                <h3 className="title">Monitoring</h3>
                                <span className="post">kondisi kolam</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="box20">
                            <img src="img/jasa3.png" alt="" className="img-fluid" />
                            <div className="box-content">
                                <h3 className="title">Jual Beli</h3>
                                <span className="post">bibit, pakan & alat</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* info sidat */}
        <section className="what-w3ls">
        <div className="container-fluid py-xl-5 py-lg-3">
            <div className="offset-xl-7 offset-lg-6 offset-md-4 offset-sm-2">
                <div className="grids-whtas pr-xl-5">
                    <div className="alert alert-success" style={{backgroundColor:'#30c39e'}} role="alert">
                        <h3 className="tittle mb-5 font-weight-bold text-white">
                            si.dat
                            <svg height="52" width="52">
                                <circle cx="26" cy="26" r="13" stroke="#6A8AC3" stroke-width="3" fill="#6A8AC3" />
                                <text x="19" y="32"  font-size="26" font-weight="bold" fill="white">
                                    n
                                </text>
                            </svg>
                        </h3>
                        <p className="font-weight-normal text-white pb-3">
                            {/* <i className='font-weight-bold text-danger'>n&nbsp;</i> */}
                            <b>Sidat (<i>Anguilla sp</i>)</b> adalah spesies golongan ikan yang bentuknya menyerupai ular/belut. 
                            Di Jepang, sidat atau <b><i>unagi</i></b> biasa dijadikan bahan makanan bergizi & bernilai tinggi.
                        </p>
                    </div>
                    <a href="about.html" className="btn button-style button-style-2 mt-sm-5 mt-4"
                    data-toggle="modal" data-target="#modalSidat">
                        Apa itu sidat
                        &nbsp;
                        <i class="fas fa-question-circle"></i>
                    </a>
                </div>
            </div>
        </div>
        </section>
        
        {/* modal info sidat */}
        <div class="modal fade mt-5" id="modalSidat" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title font-weight-bold" id="exampleModalLabel">
                        Apa itu Sidat
                        <i class="mx-2 fas fa-question-circle"></i>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="img/sidat1.png" class="img-fluid" alt=""/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info" data-dismiss="modal">
                        OK
                        <i class="ml-2 fas fa-thumbs-up"></i>
                    </button>
                </div>
                </div>
            </div>
        </div>

        </div>
        )
    }
}

export default Layanan