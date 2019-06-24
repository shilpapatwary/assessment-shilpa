import React from 'react';
import { CarData } from '../redux/types';
import '../styles/CarDetails.scss';

interface CarDetailsProps{
    car: CarData
}
export class CarDetails extends React.Component<CarDetailsProps, any>{
    constructor(props: CarDetailsProps) {
        super(props);
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
                        <button>Save</button>
                    </div>
                </section>
            </section>
        );
    }
}