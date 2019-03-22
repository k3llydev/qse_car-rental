import React, {Component} from 'react'

import HomeContent from './HomeContent'
import HomeFooter from './HomeFooter'

class Home extends Component{

    render(){
        return(
            <div>
                <HomeContent />
                <HomeFooter />
            </div>
        );
    }
}


export default Home;