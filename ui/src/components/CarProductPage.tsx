import React from 'react';
import  Header  from './Header';
import { CarDetails } from './CarDetails';
import '../styles/CarProductPage.scss';
import {AppState, CarData } from '../redux/types';
import { Dispatch } from 'redux';
import { getCarDetails } from '../redux/actions';
import { connect } from 'react-redux';

interface CarProductPageProps{
    getCarDetails: any,
    selectedCar: CarData
}

class CarProductPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        const stockNumber = this.props.match.params.id;
        this.props.getCarDetails({id: stockNumber});
    }
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <section className="promo"></section>
                {this.props.selectedCar && <CarDetails car={this.props.selectedCar}></CarDetails>}
            </React.Fragment>
        )
    }
}
function mapStateToProps(state: AppState) {
    return {
        selectedCar: state.selectedCar
    }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
      return {
        getCarDetails: (data: any) => {dispatch(getCarDetails(data))}
      }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CarProductPage);
