import React, {Component} from 'react'
import './css/LoadingScreen.css'

const ele = document.getElementById('ipl-progress-indicator')

class LoadingScreen extends Component{
    render(){
      setTimeout(()=>{
        ele.classList.add('available')
      }, this.props.timer)
        return("");
    }
}

export default LoadingScreen;