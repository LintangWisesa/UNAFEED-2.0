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
        var url = `${this.props.host}/xdk/${this.props.match.params.xid}`
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

        var xsuhu = []
        var xdo = []
        var xph = []
        var xamonia = []
        var xtds = []
        var xtangki = []
        var time = []
        var hari = []
        var dataIotMap = this.state.dataIot.map((val, i)=>{
            xsuhu.push(val.xsuhu)
            xdo.push(val.xdo)
            xph.push(val.xph)
            xamonia.push(val.xamonia)
            xtds.push(val.xtds)
            xtangki.push(val.xtangki)
            
            var tgl = val.xtime.split('T')[0]
            var jam = val.xtime.split('T')[1]
            hari.push(tgl)
            time.push(jam.split('.')[0])
            
            return 'ok'
        })

        const dataSuhu = {
            labels: time,
            datasets: [
              {
                label: `Suhu Air (°C)`,
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
                data: xsuhu
              }
            ]
        };

        const dataDo = {
            labels: time,
            datasets: [
              {
                label: `DO`,
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
                data: xdo
              }
            ]
        };

        const dataPh = {
            labels: time,
            datasets: [
              {
                label: `Ph`,
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
                data: xph
              }
            ]
        };

        const dataAmonia = {
            labels: time,
            datasets: [
              {
                label: `Amonia`,
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
                data: xamonia
              }
            ]
        };

        const dataTds = {
            labels: time,
            datasets: [
              {
                label: `DTS`,
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
                data: xtds
              }
            ]
        };

        const dataTangki = {
            labels: time,
            datasets: [
              {
                label: `Kapasitas Tangki (%)`,
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
                data: xtangki
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
                        <p>Pantau kondisi kolam sidat dengan <b>UnaSense</b> (XDK Bosch)</p>

                        {/* latest */}
                        <hr/>
                        <h3 className='mt-5'>
                            <i style={{color:'lightpink'}} className="fas fa-fish"></i>&nbsp;Kondisi Terakhir
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-info" role="alert">
                                    <small>Suhu&nbsp;Air&nbsp;(°C)</small>
                                    <h1>{xsuhu[xsuhu.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-primary" role="alert">
                                    <small>O<sub>2</sub> Terlarut&nbsp;(mg/L)</small>
                                    <h1>{xdo[xdo.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-warning" role="alert">
                                    <small>Ph&nbsp;</small>
                                    <h1>{xph[xph.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-success" role="alert">
                                    <small>Kadar Amonia&nbsp;(mg/L)</small>
                                    <h1>{xamonia[xamonia.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-dark bg-warning" role="alert">
                                    <small>TDS&nbsp;(mg/L)</small>
                                    <h1>{xtds[xtds.length - 1]}</h1>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-2 mb-5'>
                                <div className="text-center font-weight-bold p-3 alert alert-dark bg-purple" role="alert">
                                    <small>Tangki&nbsp;(%)</small>
                                    <h1>{xtangki[xtangki.length - 1]}</h1>
                                </div>
                            </div>

                        </div>
                        
                        {/* graph */}
                        <hr/>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>
                                &nbsp;Suhu Air (°C)</h3>
                                <Line data={dataSuhu} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>
                                &nbsp;O<sub>2</sub> Terlarut (mg/L)</h3>
                                <Line data={dataDo} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>
                                &nbsp;Ph</h3>
                                <Line data={dataPh} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>
                                &nbsp;Kadar Amonia (mg/L)</h3>
                                <Line data={dataAmonia} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>
                                &nbsp;TDS (mg/L)</h3>
                                <Line data={dataTds} />
                            </div>

                            <div className='col-sm-6 mb-5'>
                                <h3 className='mb-2'><i style={{color:'lightpink'}} className="fas fa-chart-line"></i>
                                &nbsp;Isi Tangki (%)</h3>
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