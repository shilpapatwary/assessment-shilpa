import React from 'react';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { getCarsContent, getColorsContent, getManufacturersContent, applyFilters, sortByMileage} from '../redux/actions';


interface CarListingProps{
   
}

export  class CarsListing extends React.Component<CarListingProps, any>{
   constructor(props: CarListingProps) {
       super(props);
   }

   
    render() {
        return(
            <div>Product Listing Page</div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        model: state.model,
        colors: state.colors,
        manufacturers: state.manufacturers
    }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
      return {
        getCarsContent: () => {dispatch(getCarsContent())},
        getColorsContent: () => {dispatch(getColorsContent())},
        getManufacturersContent: () => {dispatch(getManufacturersContent())},
        applyFilters: (color: String, manufacturer: String) => {dispatch(applyFilters(color, manufacturer))},
        sortByMileage: (type: String) => {dispatch(sortByMileage(type))},
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CarsListing);