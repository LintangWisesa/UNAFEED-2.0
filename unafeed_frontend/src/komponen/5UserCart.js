import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'

class UserCart extends Component{

    constructor(props){
        super(props)
        this.state = {
            keranjang: []
        }
    }
    componentDidMount(){
        var url = `http://localhost:1234/cart/${this.props.match.params.uid}`
        console.log(this.props.match.params.uid)
        axios.get(url)
        .then((x)=>{
            this.setState({
                keranjang: x.data
            })
            console.log(x.data)
        })
        .catch((x)=>{
            console.log('no!')
        })
    }

    render(){

        var listCart = this.state.keranjang.map((val, i)=>{
            return (
                <div className="card w-100">
                    <div className="card-header bg-info w-100" id={'head'+String(i)}>
                    <h5 className="mb-0 row">
                        <div className='col-sm-9'>
                            <button className="text-left font-weight-bold btn btn-info btn-block" data-toggle="collapse" data-target={'#col'+String(i)} aria-expanded="true" aria-controls="collapseOne">
                                <i className="fas fa-shopping-bag"></i>
                                &nbsp;&nbsp;{val.pnama}&nbsp;&nbsp;
                                <i className="fas fa-weight"></i>
                                &nbsp;&nbsp;{val.cjumlah} {val.psatuan}&nbsp;&nbsp;
                                <i className="fas fa-at"></i>
                                &nbsp;&nbsp;Rp {val.pharga}&nbsp;&nbsp;
                            </button>
                        </div>
                        <div className='col-sm-3'>
                            <button className="text-right font-weight-bold btn btn-info btn-block" data-toggle="collapse" data-target={'#col'+String(i)} aria-expanded="true" aria-controls="collapseOne">
                                <i className="fas fa-money-bill-wave"></i>
                                &nbsp;&nbsp;Rp {val.cjumlah * val.pharga}&nbsp;&nbsp;
                            </button>
                        </div>
                    </h5>
                    </div>

                    <div id={'col'+String(i)} className="collapse show" aria-labelledby={'head'+String(i)} data-parent="#accordion">
                    <div className="card-body">
                        
                        {/* isi card acordion */}
                        <div className="row">
                            <div className="col-sm-2">
                                <img src={val.pfoto} alt="" className="img-fluid" />
                            </div>
                            <div className='mt-3 col-sm-10'>
                                <h3 className='font-weight-bold'>{val.pnama}</h3> 
                                <p className='mt-1'>
                                    <i className="text-warning fas fa-star"></i>&nbsp;Rating {val.prating}
                                    &nbsp;&nbsp;
                                    <i className="text-warning fas fa-money-bill-wave"></i>&nbsp;Rp {val.pharga} <small>/{val.psatuan}</small>
                                </p>
                                <p>{val.pdeskripsi}</p>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            )
        })

        var noList = (
            <div className="lead alert alert-danger" role="alert">
                Keranjang belanja Anda masih kosong. Yuk shopping di <b>UnaStore</b>!&nbsp;
                <span role='img'>😘</span>
            </div>
        )

        var bayar = (
            <div className='text-right'>
                <button className='my-5 btn btn-lg btn-success'>
                    Bayar&nbsp;&nbsp;<i className="fas fa-cash-register"></i>
                </button>
            </div>
        )

        var gotoUnaStore = (
            <div className='text-right'>
                <button onClick={()=>{window.location.replace('/unastore')}} className='my-5 btn btn-lg btn-success'>
                    Go to UnaStore&nbsp;&nbsp;<i className="fas fa-shopping-cart"></i>
                </button>
            </div>
        )

        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    <div className="container">
                        
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            Keranjang Anda
                        </h3>
                        
                        <div className="row pt-xl-5 pt-md-3">
                            <div id='accordion' className='w-100'>

                            {this.state.keranjang.length > 0 ? listCart : noList}

                            </div>
                        </div>

                        {this.state.keranjang.length > 0 ? bayar : gotoUnaStore}
                        
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default UserCart