import React from 'react';
import  Header  from '../components/Header';
import CarDetails  from '../components/CarDetails';
import '../styles/CarProductPage.scss';
import {AppState } from '../redux/types';
import { Dispatch } from 'redux';
import { getCarDetails } from '../redux/actions';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import ErrorPage  from '../components/ErrorPage';

class CarProductPage extends React.Component<any, any> {
    componentDidMount() {
        const stockNumber = this.props.match.params.id;
        this.props.getCarDetails({id: stockNumber});
        if(!localStorage.getItem('favsList')){
            localStorage.setItem('favsList', "");
        }
    }
   
    render() {
        return !this.props.hasError ?
            <React.Fragment>
                <Header></Header>
                <section className="promo"></section>
                {Object.keys(this.props.selectedCar).length > 0 && <CarDetails car={this.props.selectedCar}></CarDetails>}
                <Footer></Footer>
            </React.Fragment> : <ErrorPage></ErrorPage>
    }
}
function mapStateToProps(state: AppState) {
    return {
        selectedCar: state.selectedCar,
        hasError: state.hasError
    }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
      return {
        getCarDetails: (data: any) => {dispatch(getCarDetails(data))}
      }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CarProductPage);
