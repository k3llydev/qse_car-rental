import React, {Component} from 'react'
import './css/SearchResultBar.css'

class SearchBar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="row search_area_holder relative">
  <img
    className="absolute"
    src="http://qserviceexp.com/new/wp-content/themes/rentacarwp/images/service_background_road.jpg"
    alt
  />
  <div className="container search_area_inner">
    <h3 className="text-center">1 Car Found</h3>
    <div className="mt-car-search">
      <form method="GET" action="http://qserviceexp.com/new/">
        <input type="hidden" name="post_type" defaultValue="mt_car" />
        <div className="row">
          <div className="slider-state-select col-md-3">
            <select
              name="mt-car-category"
              className="select-car-category form-control select2-hidden-accessible"
              tabIndex={-1}
              aria-hidden="true"
            >
              <option value>Escoge una marca</option>
              <option value="jetta">Jetta</option>
              <option value="toyota">Toyota</option>
              <option value="vento">Vento</option>
            </select>
            <span
              className="select2 select2-container select2-container--default"
              dir="ltr"
              style={{ width: 263 }}
            >
              <span className="selection">
                <span
                  className="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabIndex={0}
                  aria-labelledby="select2-mt-car-category-u5-container"
                >
                  <span
                    className="select2-selection__rendered"
                    id="select2-mt-car-category-u5-container"
                    title="Escoge una marca"
                  >
                    Escoge una marca
                  </span>
                  <span
                    className="select2-selection__arrow"
                    role="presentation"
                  >
                    <b role="presentation" />
                  </span>
                </span>
              </span>
              <span className="dropdown-wrapper" aria-hidden="true" />
            </span>
          </div>
          <div className="slider-state-select col-md-3">
            <select
              name="mt-car-type"
              className="select-car-type form-control select2-hidden-accessible"
              tabIndex={-1}
              aria-hidden="true"
            >
              <option value>Escoge el tipo de auto</option>
              <option value="pasajeros">Pasajeros</option>
              <option value="sedan">Sedan</option>
            </select>
            <span
              className="select2 select2-container select2-container--default"
              dir="ltr"
              style={{ width: 263 }}
            >
              <span className="selection">
                <span
                  className="select2-selection select2-selection--single"
                  role="combobox"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabIndex={0}
                  aria-labelledby="select2-mt-car-type-g8-container"
                >
                  <span
                    className="select2-selection__rendered"
                    id="select2-mt-car-type-g8-container"
                    title="Escoge el tipo de auto"
                  >
                    Escoge el tipo de auto
                  </span>
                  <span
                    className="select2-selection__arrow"
                    role="presentation"
                  >
                    <b role="presentation" />
                  </span>
                </span>
              </span>
              <span className="dropdown-wrapper" aria-hidden="true" />
            </span>
          </div>
          <div className="col-md-3">
            <input
              type="search"
              className="search-field form-control"
              placeholder="Buscar …"
              defaultValue
              name="s"
            />
          </div>
          <div className="col-md-3 submit">
            <input
              type="submit"
              defaultValue="ENCUENTRA TU AUTO"
              className="form-control btn btn-warning"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
        );
    }
}
export default SearchBar;