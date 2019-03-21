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

  
class SearchForm extends Component{

    render(){
        return(
            <form>
                <Select placeholder="Categoría" options={scaryAnimals} />
            </form>
        );
    }

}

class Home extends Component{

    render(){
        return(
            <div>
                <div id="SearchForm">
                    <div id="TripTypeSelector">
                        <div id="RoundTrip" onclick={this.showRoundTrip}>
                            REDONDO
                        </div>
                        <div id="OneWayTrip" onclick={this.showOneWayTrip}>
                            SOLO IDA
                        </div>
                    </div>
                    <SearchForm />
                </div>
            </div>
        );
    }
}

export default Home;