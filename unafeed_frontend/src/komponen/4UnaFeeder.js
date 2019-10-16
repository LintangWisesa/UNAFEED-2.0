import React, {Component} from 'react'
import Footer from './1Home/eFooter'

class UnaFeeder extends Component{

    constructor(){
        super()
        this.state = {
            statusmixer: 'OFF', buttonmixer: 'ON', butmix: 'btn btn-info btn-lg btn-block',
            statusextruder: 'OFF', buttonextruder: 'ON', butext: 'btn btn-info btn-lg btn-block'
        }
    }

    mixer = () => {
        if(this.state.statusmixer == 'OFF'){
            this.setState({
                statusmixer: 'ON', buttonmixer: 'OFF', 
                butmix: 'btn btn-warning btn-lg btn-block',
            })
        } else {
            this.setState({
                statusmixer: 'OFF', buttonmixer: 'ON', 
                butmix: 'btn btn-info btn-lg btn-block',
            })
        }
    }

    extruder = () => {
        if(this.state.statusextruder == 'OFF'){
            this.setState({
                statusextruder: 'ON', buttonextruder: 'OFF', 
                butext: 'btn btn-warning btn-lg btn-block',
            })
        } else {
            this.setState({
                statusextruder: 'OFF', buttonextruder: 'ON', 
                butext: 'btn btn-info btn-lg btn-block',
            })
        }
    }

    render(){
        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            UnaFeeder
                        </h3>
                        <p>Kontrol mesin pakan Unagi Anda dengan <b>UnaFeeder</b></p>
                        
                        {/* kontrol unafeeder */}
                        <hr/>
                        <h3 className='mt-5'>
                            <i style={{color:'lightpink'}} className="fas fa-fish"></i>
                            &nbsp;Kontrol Manual
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">

                            <div className='col-sm-6 col-md-6'>
                                <center>
                                    <p>Status Mixer: <b>{this.state.statusmixer}</b></p>
                                </center>
                                <button onClick={this.mixer} style={{height:'100px'}} 
                                type="button" class={this.state.butmix}>
                                    <b>Mixer {this.state.buttonmixer}</b>
                                </button>
                            </div>

                            <div className='col-sm-6 col-md-6'>
                                <center>
                                    <p>Status Extruder: <b>{this.state.statusextruder}</b></p>
                                </center>
                                <button onClick={this.extruder} style={{height:'100px'}} 
                                type="button" class={this.state.butext}>
                                    <b>Extruder {this.state.buttonextruder}</b>
                                </button>
                            </div>

                        </div>

                        {/* latest */}
                        <hr/>
                        <h3 className='mt-5'>
                            <i style={{color:'lightpink'}} className="fas fa-fish"></i>
                            &nbsp;Kontrol Semi Otomatis
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">

                            <div className='col-sm-12 col-md-3'>
                                <p className='mb-2'><b>Bobot satuan sidat (gr)</b></p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" for="inputGroupSelect01">
                                            <i class="fas fa-mouse-pointer"></i>
                                        </label>
                                    </div>
                                    <input type='number' className="custom-select" placeholder='Ketik sini ...'/>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-3'>
                                <p className='mb-2'><b>Bobot total sidat (gr)</b></p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" for="inputGroupSelect01">
                                            <i class="fas fa-mouse-pointer"></i>
                                        </label>
                                    </div>
                                    <input type='number' className="custom-select" placeholder='Ketik sini ...'/>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-3'>
                                <p className='mb-2'><b>Frekuensi pemberian pakan</b></p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" for="inputGroupSelect01">
                                            <i class="fas fa-mouse-pointer"></i>
                                        </label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option selected value="0">3 kali</option>
                                        <option value="1">4 kali</option>
                                        <option value="2">5 kali</option>
                                        <option value="3">6 kali</option>
                                        <option value="3">Rekomendasi kami</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className='col-sm-12 col-md-3'>
                                <button style={{height: '80px'}} className='mb-3 btn btn-lg btn-info btn-block'>
                                    Terapkan&nbsp;<i class="fas fa-cloud-upload-alt"></i>
                                </button>
                            </div>

                        </div>

                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default UnaFeeder