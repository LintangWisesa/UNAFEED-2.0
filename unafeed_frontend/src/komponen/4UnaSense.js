import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'
// npm i react-chartjs-2 chart.js
import {Line} from 'react-chartjs-2';

class UnaSense extends Component{

    constructor(){
        super()
        this.state = {
            dataIot: []
        }
    }

    componentDidMount(){
        var url = `http://localhost:1234/iot/${this.props.match.params.iid}`
        console.log(this.props.match.params.uid)
        axios.get(url)
        .then((x)=>{
            this.setState({
                dataIot: x.data
            })
            console.log(x.data)
        })
        .catch((x)=>{
            console.log('no!')
        })
    }

    render(){

        var suhuUdara = []
        var suhuAir = []
        var lembabUdara = []
        var pressureUdara = []
        var altitude = []
        var tangki = []
        var time = []
        var hari = []
        var dataIotMap = this.state.dataIot.map((val, i)=>{
            suhuUdara.push(val.isuhuu)
            suhuAir.push(val.isuhua)
            lembabUdara.push(val.ilembab)
            pressureUdara.push(val.ipressu)
            altitude.push(val.ialti)
            tangki.push(val.itangki)
            
            var tgl = val.itime.split('T')[0]
            var jam = val.itime.split('T')[1]
            hari.push(tgl)
            time.push(jam.split('.')[0])
            
            return 'ok'
        })

        const dataSuhuUdara = {
            labels: time,
            datasets: [
              {
                label: `Suhu Udara (°C) - ${hari[0]}`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(75,192,192,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: suhuUdara
              }
            ]
        };

        const dataSuhuAir = {
            labels: time,
            datasets: [
              {
                label: `Suhu Air (°C) - ${hari[0]}`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(34, 167, 240,0.4)',
                borderColor: 'rgba(34, 167, 240,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(34, 167, 240,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(34, 167, 240,1)',
                pointHoverBorderColor: 'rgba(34, 167, 240,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: suhuAir
              }
            ]
        };

        const dataLembabUdara = {
            labels: time,
            datasets: [
              {
                label: `Kelembaban Udara (%) - ${hari[0]}`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(255, 203, 5,0.4)',
                borderColor: 'rgba(255, 203, 5,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 203, 5,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 203, 5,1)',
                pointHoverBorderColor: 'rgba(255, 203, 5,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: lembabUdara
              }
            ]
        };

        const dataPressUdara = {
            labels: time,
            datasets: [
              {
                label: `Tekanan Udara (Pa) - ${hari[0]}`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(46, 204, 113,0.4)',
                borderColor: 'rgba(46, 204, 113,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(46, 204, 113,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(46, 204, 113,1)',
                pointHoverBorderColor: 'rgba(46, 204, 113,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: pressureUdara
              }
            ]
        };

        const dataAlti = {
            labels: time,
            datasets: [
              {
                label: `Altitude (m) - ${hari[0]}`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(255, 148, 120,0.4)',
                borderColor: 'rgba(255, 148, 120,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 148, 120,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 148, 120,1)',
                pointHoverBorderColor: 'rgba(255, 148, 120,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: altitude
              }
            ]
        };

        const dataTangki = {
            labels: time,
            datasets: [
              {
                label: `Kapasitas Tangki (%) - ${hari[0]}`,
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(191, 85, 236,0.4)',
                borderColor: 'rgba(191, 85, 236,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(191, 85, 236,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(191, 85, 236,1)',
                pointHoverBorderColor: 'rgba(191, 85, 236,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: tangki
              }
            ]
        };

        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            UnaSense
                        </h3>
                        <p>Pantau kondisi kolam sidat & <b>UnaFeeder</b> Anda</p>
                        
                        {/* kontrol unafeeder */}
                        <hr/>
                        <h3 className='mt-5'>
                            <i style={{color:'lightpink'}} className="fas fa-fish"></i>&nbsp;Kontrol UnaFeeder
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">

                            <div className='col-sm-12 col-md-3'>
                                <p>Jumlah sidat @kolam</p>
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
                                <p>Umur rerata sidat @kolam</p>
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
                                <p>Bobot rerata sidat @kolam</p>
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
                                <p>Frekuensi pemberian pakan</p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" for="inputGroupSelect01">
                                            <i class="fas fa-mouse-pointer"></i>
                                        </label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option selected>Pilih ...</option>
                                        <option value="1">4 kali</option>
                                        <option value="2">5 kali</option>
                                        <option value="3">6 kali</option>
                                        <option value="4">7 kali</option>
                                        <option value="5">8 kali</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <button className='mb-3 btn btn-lg btn-info btn-block'>
                            Terapkan&nbsp;<i class="fas fa-cloud-upload-alt"></i>
                        </button>

                        {/* latest */}
                        <hr/>
                        <h3 className='mt-5'>
                            <i style={{color:'lightpink'}} className="fas fa-fish"></i>&nbsp;Kondisi Terakhir
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-info" role="alert">
                                    <small>Suhu&nbsp;Udara&nbsp;(°C)</small>
                                    <h1>{suhuUdara[suhuUdara.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-primary" role="alert">
                                    <small>Suhu&nbsp;Air&nbsp;(°C)</small>
                                    <h1>{suhuAir[suhuAir.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-warning" role="alert">
                                    <small>Kelembaban&nbsp;(%)</small>
                                    <h1>{lembabUdara[lembabUdara.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-success" role="alert">
                                    <small>Tekanan&nbsp;Udara&nbsp;(Pa)</small>
                                    <h1>{pressureUdara[pressureUdara.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-dark bg-warning" role="alert">
                                    <small>Altitude&nbsp;(m)</small>
                                    <h1>{altitude[altitude.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-dark bg-purple" role="alert">
                                    <small>Tangki&nbsp;(%)</small>
                                    <h1>{tangki[tangki.length - 1]}</h1>
                                </div>
                            </div>

                        </div>
                        
                        {/* graph */}
                        <hr/>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>&nbsp;Suhu Udara (°C)</h3>
                                <Line data={dataSuhuUdara} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>&nbsp;Suhu Air (°C)</h3>
                                <Line data={dataSuhuAir} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>&nbsp;Kelembaban Udara (%)</h3>
                                <Line data={dataLembabUdara} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>&nbsp;Tekanan Udara (Pa)</h3>
                                <Line data={dataPressUdara} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>&nbsp;Altitude (mdpl)</h3>
                                <Line data={dataAlti} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>&nbsp;Kapasitas Tangki (%)</h3>
                                <Line data={dataTangki} />
                            </div>

                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default UnaSense