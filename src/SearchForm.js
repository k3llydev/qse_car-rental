import React, {Component} from 'react'
import Select from 'react-select' //FORM
import './css/SearchForm.css' //FORM
import { groupedOptions } from './data'; //FORM

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  
  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

class SearchForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            round: true
        };
    }

    RoundTripShow(){
        this.setState({
            round: true
        });
    }

    OneWayTripShow(){
        this.setState({
            round: false
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
            {/* <center><h2>Reserve ahora su vehículo</h2></center> */}
                    {/* <div id="TripTypeSelector">
                        <div id="RoundTrip" className="noselect" onClick={this.RoundTripShow.bind(this)}>
                            REDONDO
                        </div>
                        <div id="OneWayTrip" className="noselect" onClick={this.OneWayTripShow.bind(this)}>
                            SOLO IDA
                        </div>
                    </div> */}
                        <RoundTrip />
                        {/* <OneWayTrip style={ hidden } /> */}
            </div>
        );
    }

}














class RoundTrip extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    // componentDidMount(){
    //     fetch("https://api.example.com/items")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //         this.setState({
    //             isLoaded: true,
    //             items: result.items
    //         });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //         this.setState({
    //             isLoaded: true,
    //             error
    //         });
    //         }
    //     )
    // }

    

    render(){
        return(
            <form name="SearchForm" style={this.props.style} action={"search/car/"}>
                <Select
                    name="id"
                    id="SearchForm"
                    style={{zIndex:99999}}
                    placeholder="Seleccione un vehículo..."
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                />
                <div id="submitButtonContainer">
                    <input id="goToReservation" type="submit" value="RESERVAR" />
                </div>
            </form>
        );
    }
}

// class OneWayTrip extends Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <form style={this.props.style} method="GET" action="search/">
//                 One way trip form
//                 <Select
//                     defaultValue={colourOptions[1]}
//                     options={groupedOptions}
//                     formatGroupLabel={formatGroupLabel}
//                 />
//                 <input type="submit" value="Buscar" />
//             </form>
//         );
//     }
// }

export default SearchForm;