import React, {Component} from 'react'
import './css/Home.css'
import './css/Header.css'
import './css/SearchForm.css'
import Select from 'react-select'

const scaryAnimals = [
    { label: "Pequeño", value: 1 },
    { label: "Mediano", value: 2 },
    { label: "Grande", value: 3 }
  ];

  class Home extends Component{

    render(){
        return(
            <div>
                <SearchForm />
            </div>
        );
    }
}


  
class SearchForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            round: true
        };
    }
    
    callsx(){
        this.setState({
			round: !this.state.round
		});
    }

    render(){
        var shown = {
			display: this.state.round ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.round ? "none" : "block"
		}
        return(
            <div id="SearchForm">
                    <div id="TripTypeSelector">
                        <div id="RoundTrip" onClick={this.callsx.bind(this)}>
                            REDONDO
                        </div>
                        <div id="OneWayTrip" onClick={this.callsx.bind(this)}>
                            SOLO IDA
                        </div>
                    </div>
                    <form action="search/">
                        <h2 style={ shown }>Round trip form</h2>
				        <h2 style={ hidden }>One way trip form</h2>
                        {/* <Select placeholder="Categoría" options={scaryAnimals} /> */}
                        <input type="submit" value="Buscar" />
                    </form>
            </div>
        );
    }

}




class SearchType extends Component{

    constructor(props){
        super(props)
        this.state = {
            round: true
        };
    }

    toggleForm(){
        this.state = {
            round: false
        };
    }
    

    render(){
        var shown = {
			display: this.state.round ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.round ? "none" : "block"
		}
        return(
            <div>
				<h2 style={ shown }>Round trip form</h2>
				<h2 style={ hidden }>One way trip form</h2>
			</div>
        );
    }
}




export default Home;