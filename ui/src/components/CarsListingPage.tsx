import React from 'react';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { AppState } from '../redux/types';
import { getCarsContent, getColorsContent, getManufacturersContent, applyFilters, sortByMileage, getCarsByPage} from '../redux/actions';

import  Header  from './Header';
import  Footer  from './Footer';
import { FilterCars } from './FilterCars';
import { CarsListing } from './CarsListing';
import '../styles/layout.scss';

interface CarListingProps{
    getCarsContent: any,
    getColorsContent: any,
    getManufacturersContent: any,
    getCarsByPage: any,
    applyFilters: any,
    sortByMileage: any,
    model: any,
    colors: any,
    manufacturers: any
}

class CarsListingPage extends React.Component<CarListingProps, any>{
   constructor(props: CarListingProps) {
       super(props);
       this.state={
           selectedColor: '',
           selectedManufacturer: '',
           selectedSort:'',
           currentPage: 1
       }
       this.applyFilters = this.applyFilters.bind(this);
       this.sortByMileage = this.sortByMileage.bind(this);
       this.getCarsByPage = this.getCarsByPage.bind(this);
   }

   getCarsByPage(page: number) {
    this.setState({
        currentPage: page
    }, () => {
        const params = this.getParams();
        this.props.getCarsByPage(params)
    })
   }

   sortByMileage(sort: String) {
    this.setState({
        selectedSort: sort,
        currentPage: 1
    }, () => {
        const params = this.getParams();
        this.props.sortByMileage(params);
    });
   }

   getParams() {
       return{
        color: this.state.selectedColor,
        manufacturer: this.state.selectedManufacturer,
        sort: this.state.selectedSort,
        page: this.state.currentPage
       }
   }
   applyFilters(color: String, manufacturer: String) {
        this.setState({
            selectedColor: color,
            selectedManufacturer: manufacturer,
            currentPage: 1
        }, () => {
            const params = this.getParams();
            this.props.applyFilters(params);
        });
   }
   componentDidMount() {
       this.props.getCarsContent({page:1});
       this.props.getColorsContent();
       this.props.getManufacturersContent();
   }
   
    render() {
        return(
            <div id="main">
                <Header></Header>
                <section className="main__content">
                    { this.props.colors && this.props.manufacturers && <FilterCars colors={this.props.colors} manufacturers={this.props.manufacturers} filterCars={this.applyFilters}></FilterCars>}
                    <CarsListing model={this.props.model} currentPage={this.state.currentPage} sortByMileage={this.sortByMileage} getCarsByPage={this.getCarsByPage}></CarsListing>
                </section>
                <Footer></Footer>
            </div>
        )
    }
}

function mapStateToProps(state: AppState) {
    return {
        model: state.model,
        colors: state.colors,
        manufacturers: state.manufacturers
    }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
      return {
        getCarsContent: (data: any) => {dispatch(getCarsContent(data))},
        getColorsContent: () => {dispatch(getColorsContent())},
        getManufacturersContent: () => {dispatch(getManufacturersContent())},
        applyFilters: (params: any) => {dispatch(applyFilters(params))},
        sortByMileage: (params: any) => {dispatch(sortByMileage(params))},
        getCarsByPage: (params: any) => {dispatch(getCarsByPage(params))}
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CarsListingPage);