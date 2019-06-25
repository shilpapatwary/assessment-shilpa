import React from 'react';
import { CarData } from '../redux/types';
import '../styles/CarDetails.scss';

interface CarDetailsProps{
    car: CarData
}
export class CarDetails extends React.Component<CarDetailsProps, any>{
    constructor(props: CarDetailsProps) {
        super(props);
        this.state = {
            isFavourite: false
        }
        this.addToFavs = this.addToFavs.bind(this);
        this.removeFromFavs = this.removeFromFavs.bind(this);
    }

    removeFromFavs() {
        let favsList = localStorage.getItem('favsList');
        if(favsList){
            let favsListArr = favsList === '' ? favsList.split('') : favsList.split(',');
            let index = favsListArr.findIndex((stockNum) => {
                return stockNum === `${this.props.car.stockNumber}`
            });
            favsListArr.splice(index, 1);
            localStorage.setItem('favsList', favsListArr.join(','));
            this.setState({
                isFavourite: false
            })
        }
    }

    addToFavs() {
        let favsList = localStorage.getItem('favsList');
        if(favsList || favsList === ''){
            let favsListArr = favsList === '' ? favsList.split('') : favsList.split(',');
            favsListArr.push(`${this.props.car.stockNumber}`);
            localStorage.setItem('favsList', favsListArr.join(','));
            this.setState({
                isFavourite: true
            })
        }
    }

    componentDidMount() {
        let favsList = localStorage.getItem('favsList');
        if(favsList || favsList === ''){
            let favsListArr =  favsList === '' ? favsList.split('') : favsList.split(',');
            if(favsListArr.includes(`${this.props.car.stockNumber}`)){
                this.setState({
                    isFavourite: true
                });
            }
        }
    }

    render(){
        return(
            <section className="car__details_container">
                <section className="car__details_section">
                    <div className="heading__bold">{this.props.car.manufacturerName} {this.props.car.modelName}</div>
                    { this.props.car.mileage && <div>Stock #{this.props.car.stockNumber} - {this.props.car.mileage.number}{this.props.car.mileage.unit} - {this.props.car.fuelType} - {this.props.car.color}</div>}
                    <div>This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.</div>
                </section>
                <section className="car__favorites">
                    <div className="cars__favorites_section">
                        <div className="cars__favorites_text">
                            <span>If you like this car, click the button and save it in your collection of favourite items.</span>
                        </div>
                        {this.state.isFavourite ? <button onClick={this.removeFromFavs}>Remove</button> : <button onClick={this.addToFavs}>Save</button>}
                    </div>
                </section>
            </section>
        );
    }
}