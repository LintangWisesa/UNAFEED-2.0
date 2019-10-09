import React, {Component} from 'react'

// komponen
import Banner from './1Home/aBanner'
import Layanan from './1Home/bLayanan'
import Founder from './1Home/cFounder'
import Footer from './1Home/eFooter'

class LandingPage extends Component {
    render(){
        return(
            <div>

              <Banner/> 
              <Layanan/>
              <Founder/>
              <Footer/>
                
            </div>
        )
    }
}

export default LandingPage