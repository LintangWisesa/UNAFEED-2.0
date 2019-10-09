import React, {Component} from 'react'

// komponen
import Banner from './1Home/aBanner'
import Layanan from './1Home/bLayanan'
import Founder from './1Home/cFounder'
import Testimoni from './1Home/dTestimoni'
import Footer from './1Home/eFooter'

class LandingPage extends Component {
    render(){
        return(
            <div>

              <Banner/> 
              <Layanan/>
              <Founder/> 
              <Testimoni/>
              <Footer/>
                
            </div>
        )
    }
}

export default LandingPage