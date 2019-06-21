import React from 'react';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { getCarsContent, getColorsContent, getManufacturersContent, applyFilters, sortByMileage} from '../redux/actions';

import  Header  from './Header';
import  Footer  from './Footer';
import { FilterCars } from './FilterCars';
import { CarsListing } from './CarsListing';


interface CarListingProps{
   
}

export  class CarsListingPage extends React.Component<CarListingProps, any>{
   constructor(props: CarListingProps) {
       super(props);
   }

   
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <FilterCars></FilterCars>
                <CarsListing></CarsListing>
                <Footer></Footer>
            </React.Fragment>
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

  export default connect(mapStateToProps, mapDispatchToProps)(CarsListingPage);