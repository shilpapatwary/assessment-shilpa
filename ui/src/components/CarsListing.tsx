import React from 'react';
import '../styles/CarsListing.scss';
import { Dropdown } from './Dropdown';
import CarInfo from './CarInfo';
import { ModelData } from '../redux/types';
import { Pagination } from './Pagination';

interface CarsListingProps{
    model: ModelData,
    currentPage: Number,
    sortByMileage: any,
    getCarsByPage: any
}

export  class CarsListing extends React.Component<CarsListingProps, any>{
   constructor(props: CarsListingProps) {
       super(props);
       this.state={
           selectedSort: 'None'
       }
       this.sortCars = this.sortCars.bind(this);
   }

   sortCars(sort: String) {
       let selectedSort = sort === 'Mileage - Ascending' ? 'asc' : 'des';
       if(sort === 'None'){
           selectedSort = '';
       }
       this.setState({
        selectedSort: sort
       });
       this.props.sortByMileage(selectedSort);
   }

    render() {
        const sortOptions = ['Mileage - Ascending', 'Mileage - Descending'];
        const carCountInPage = this.props.model.cars && this.props.model.cars.length;
        return(
            <section className="cars__listing">
                <div className="cars__listing_header">
                    <div className="cars__header_title">
                        <span className="heading__bold">Available cars</span>
                        <span className="heading__regular">Showing {carCountInPage} of {this.props.model.totalCarsCount} results</span>
                    </div>
                    <div className="cars__header_sort">
                        <span>Sort by</span>
                        <Dropdown data={sortOptions} selected={this.state.selectedSort} setSelected={this.sortCars} showAll={false}></Dropdown>
                    </div>
                </div>
                <div className="cars__listing_main">
                {
                   this.props.model.cars &&  this.props.model.cars.map((car: any, index: any) => {
                        return <CarInfo key={index}car={car}></CarInfo>
                    })
                }
                </div>
                <div className="cars__listing_pagination">
                   {this.props.model &&  <Pagination currentPage={this.props.currentPage} pagesCount={this.props.model.totalPageCount} getCarsByPage={this.props.getCarsByPage}></Pagination>}
                </div>
            </section>
        )
    }
}