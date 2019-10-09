import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'

class UnaStore extends Component{

    constructor(){
        super()
        this.state = {
            produk: [],
            produkTerpilih: '',
            jumlah: 1,
            hargaTotal: 0
        }
    }

    componentWillMount(){
        var url = 'http://localhost:1234/product'
        axios.get(url)
        .then((x)=>{
            console.log(x.data)
            this.setState({
                produk: x.data
            })
        })
        .catch((x)=>{
            console.log(x)
        })
    }

    passToModal = (val) => {
        console.log(val)
        this.setState({
            produkTerpilih: val,
            jumlah: 1
        })
    }
    tambahJumlah = () => {
        this.setState({
            jumlah: this.state.jumlah += 1
        })
    }
    kurangJumlah = () => {
        if(this.state.jumlah == 1){
            this.setState({
                jumlah: 1
            })
        } else {
            this.setState({
                jumlah: this.state.jumlah -= 1
            })
        }
    }
    tambahCart = () => {
        var cuid = this.props.user.uid
        var cpid = this.state.produkTerpilih.pid
        var cjumlah = this.state.jumlah
        var url = 'http://localhost:1234/cart'
        axios.post(url, {
            cpid: cpid, cuid: cuid, cjumlah: cjumlah
        })
        .then((x)=>{
            alert(`🎉 Hore! ${this.state.jumlah}${this.state.produkTerpilih.psatuan} ${this.state.produkTerpilih.pnama} sudah di keranjang Anda. Yuk shopping lagi di UnaStore... 🛒`)
            window.location.reload()
        })
        .catch((x)=>{
            alert('Maaf, gagal menambahkan ke keranjang 😭 Coba lagi.')
        })
    }

    render(){

        var produkList = this.state.produk.map((val, i)=>{
            return (
                <div key={i} className="col-lg-4 col-sm-6 mb-5">
                    <div className="box20">
                        <img src={val.pfoto} alt="" className="img-fluid" />
                        <div className="box-content">
                            <h3 className="title">
                                {val.pnama}
                            </h3>
                            <span className="post">
                                Rp {val.pharga} <small>/{val.psatuan}</small>
                            </span>
                        </div>
                    </div>
                    <div className='mt-3 row'>
                        <div className='col-sm-8'>
                            <h3 className='font-weight-bold'>{val.pnama}</h3> 
                            <p className='mt-1'>
                                <i className="text-warning fas fa-star"></i>&nbsp;{val.prating}
                                &nbsp;&nbsp;
                                <i className="text-warning fas fa-money-bill-wave"></i>&nbsp;Rp {val.pharga} <small>/{val.psatuan}</small>
                            </p>
                        </div>
                        <div className='text-right col-sm-4'>
                            <button onClick={() => {this.passToModal(val)}} data-toggle="modal" data-target="#cartModal" className='btn btn-lg btn-success'>
                                Beli&nbsp;<i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>

                </div>
            )
        }) 

        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            UnaStore
                        </h3>
                        <p>Lengkapi kebutuhan budidaya sidat Anda bersama <b>UnaStore</b></p>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            {produkList}

                        </div>
                    </div>
                </section>
                
                <Footer/>

                {/* modal tambah ke keranjang */}
                <div className="mt-5 modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="font-weight-bold modal-title" id="cartModalLabel">
                                Beli {this.state.produkTerpilih.pnama}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className=" row modal-body">
                            <div className='col-sm-4'>
                                <img src={this.state.produkTerpilih.pfoto} alt="" className="mb-3 img-fluid" />
                                {/* input jumlah beli */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button onClick={this.kurangJumlah} className="btn btn-outline-info" type="button">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text text-dark" className="form-control" value={this.state.jumlah} 
                                    onChange={(e)=>{this.setState({jumlah: e.target.value})}}
                                    placeholder={this.state.jumlah} aria-label="" aria-describedby="basic-addon1"/>
                                    <div className="input-group-append">
                                        <button onClick={this.tambahJumlah} className="btn btn-outline-info" type="button">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <p className='text-dark mt-1'>
                                    <i className="text-warning fas fa-star"></i>&nbsp;{this.state.produkTerpilih.prating}
                                    &nbsp;&nbsp;
                                    <i className="text-warning fas fa-money-bill-wave"></i>&nbsp;Rp {this.state.produkTerpilih.pharga} <small>/{this.state.produkTerpilih.psatuan}</small>
                                </p>
                                <hr/>
                                <p className='text-dark'>
                                    {this.state.produkTerpilih.pdeskripsi}
                                </p>
                                <hr/>
                                <p>Total Bayar</p>
                                <h3 className='text-dark font-weight-bold'>
                                    <i className="text-warning fas fa-money-bill-wave"></i>
                                    &nbsp;Rp {this.state.produkTerpilih.pharga * this.state.jumlah}
                                </h3>
                            </div>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">
                                    Batal
                                <i className="ml-2 fas fa-window-close"></i>
                                </button>
                                <button onClick={this.tambahCart}
                                type="button" className="btn btn-success">
                                    Tambah
                                <i className="ml-2 fas fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UnaStore