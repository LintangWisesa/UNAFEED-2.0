import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'

class ProfilUser extends Component{

    constructor(){
        super()
        this.state = {
            nama: '', email: '', alamat: '', kabkota: '', telp: '',
            foto: 'Foto Anda ...', file: '', fotoTerupload: ''
        }
    }

    namaInput = (event) => {
        this.setState({nama: event.target.value});
    }
    emailInput = (event) => {
        this.setState({email: event.target.value});
    }
    alamatInput = (event) => {
        this.setState({alamat: event.target.value});
    }
    kabkotaInput = (event) => {
        this.setState({kabkota: event.target.value});
    }
    telpInput = (event) => {
        this.setState({telp: event.target.value});
    }
    pilihFotoStep1 = (e) => {
        console.log(e.target.files[0])
        this.setState({
            foto: e.target.files[0].name,
            file: e.target.files[0]
        })
    }
    uploadFotoStep2 = () => {
        const formData = new FormData();
        formData.append('filename', this.state.file);
        console.log(formData)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        var url = 'http://localhost:1234/file'
        axios.post(url, formData, config)
        .then((response) => {
            alert("OK");
        }).catch((error) => {
            alert('NO')
        });
    }
    postFoto = (e) => {
        this.setState({
            foto: e.target.files[0].name,
            file: e.target.files[0]
        }, ()=>{
            const formData = new FormData();
            formData.append('filename', this.state.file);
            console.log(formData)
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            var url = 'http://localhost:1234/file'
            axios.post(url, formData, config)
            .then((response) => {
                alert('Foto terupload 🤩 Click simpan untuk mengganti foto.');
                // console.log(response.data)
                this.setState({
                    fotoTerupload: response.data.fotoTerupload
                })
            }).catch((error) => {
                alert('Foto gagal diperbarui 😭 silakan coba lagi 🙏')
            });
        })
    }
    updateProfil = ()=>{
        var url = 'http://localhost:1234/update'
        axios.put(url, {
            ufoto : this.state.fotoTerupload ? this.state.fotoTerupload : this.props.user.ufoto,
            ualamat : this.state.alamat ? this.state.alamat : this.props.user.ualamat,
            ukabkota : this.state.kabkota ? this.state.kabkota : this.props.user.ukabkota,
            utelp : this.state.telp ? this.state.telp : this.props.user.utelp,
            uid : this.props.user.uid
        })
        .then((x)=>{
            alert('Profil sukses terupdate 😎')
            window.location.replace('/')
        })
        .catch((x)=>{
            alert('Profil gagal terupdate 😭 Silakan coba lagi.')
            window.location.replace('/')
        })
    }
    render(){

        var utglreg = String(this.props.user.utglreg).split('T')[0]
        var ujamreg = String(this.props.user.utglreg).split('T')[1]
        var utglupdate = String(this.props.user.utglupdate).split('T')[0]
        var ujamupdate = String(this.props.user.utglupdate).split('T')[1]

        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            Profil Saya
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            <div className="col-lg-3 col-sm-4">

                                {/* foto profil */}
                                <div className="box20 mb-2">
                                    <img src={this.state.fotoTerupload ? this.state.fotoTerupload : this.props.user.ufoto} alt="" className="img-fluid" />
                                    <div className="box-content">
                                        <h3 className="title">
                                            Upload
                                        </h3>
                                        <span className="post mb-2">
                                            foto profil
                                        </span>
                                        <h2 className="title">
                                            <i class="fas fa-hand-point-down"></i>
                                        </h2>
                                    </div>
                                </div>

                                {/* tombol upload */}
                                {/* https://medium.com/@mahesh_joshi/reactjs-nodejs-upload-image-how-to-upload-image-using-reactjs-and-nodejs-multer-918dc66d304c */}
                                <div>
                                    <label for="files" className="btn btn-info">
                                        Unggah foto&nbsp;&nbsp;<i class="fas fa-camera"></i>
                                    </label>
                                    &nbsp;&nbsp;{this.state.foto}
                                    <input id="files" style={{visibility:'hidden'}} type="file" name='filename'
                                    onChange={this.postFoto}/>

                                    {/* <form onSubmit={this.uploadFoto}>
                                        <input type="file" name="filename" onChange= {this.pilihFoto} />
                                        <button type="submit">Upload</button>
                                    </form> */}

                                </div>
                            </div>

                            <div className="col-lg-9 col-sm-8">
                                
                                {/* input nama */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.unama} onChange={this.namaInput}  
                                    type="text" className="form-control" placeholder={this.props.user.unama} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>

                                {/* input email */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.uemail} onChange={this.emailInput}  
                                    type="text" className="form-control" placeholder={this.props.user.uemail} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>

                                {/* input alamat */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i class="fas fa-map-marker-alt"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.ualamat} onChange={this.alamatInput}  
                                    type="text" className="form-control" placeholder={this.props.user.ualamat ? this.props.user.ualamat : 'Ketik alamat Anda ...'} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>

                                {/* input kabkota */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i class="fas fa-city"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.ukabkota} onChange={this.kabkotaInput}  
                                    type="text" className="form-control" placeholder={this.props.user.ukabkota ? this.props.user.ukabkota : 'Ketik Kota/Kabupaten Anda ...'} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>

                                {/* input telp */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.utelp} onChange={this.telpInput}  
                                    type="text" className="form-control" placeholder={this.props.user.utelp ? this.props.user.utelp : 'Ketik no. telephone Anda ...'} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                
                                <div className='mb-5'>
                                    <p>
                                        Terdaftar: 
                                        &nbsp;&nbsp;<i className="fas fa-calendar-check"></i>
                                        &nbsp;&nbsp;<i>{utglreg}</i> 
                                        &nbsp;&nbsp;<i className="far fa-clock"></i>
                                        &nbsp;&nbsp;<i>{String(ujamreg).split('.')[0]}</i>
                                    </p>
                                    <p>
                                        Terakhir diupdate: 
                                        &nbsp;&nbsp;<i className="fas fa-calendar-check"></i>
                                        &nbsp;&nbsp;<i>{utglupdate}</i>
                                        &nbsp;&nbsp;<i className="far fa-clock"></i>
                                        &nbsp;&nbsp;<i>{String(ujamupdate).split('.')[0]}</i>
                                    </p>
                                </div>

                                <button className='btn btn-danger' onClick={()=>{window.location.reload()}}>
                                    Batal
                                    <i className="ml-2 fas fa-window-close"></i>
                                </button>
                                &nbsp;&nbsp;
                                <button className='btn btn-success' onClick={this.updateProfil}>
                                    Simpan
                                    <i className="ml-2 fas fa-save"></i>
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

export default ProfilUser