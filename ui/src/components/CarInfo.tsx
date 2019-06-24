import React from 'react';
import '../styles/CarInfo.scss';


interface CarInfoProps{
    car: any
}
const CarInfo = (props: CarInfoProps) => {
    const productPageUrl = `/product/${props.car.stockNumber}`;
    return(
       <div className="car__info">
            <div className="car__info_image">
                    <img src={props.car.pictureUrl} alt="carImage"></img>
            </div>
            <div className="car__info_text">
                    <div className="heading__bold">{props.car.manufacturerName} {props.car.modelName}</div>
                    <div>Stock #{props.car.stockNumber} - {props.car.mileage.number}{props.car.mileage.unit} - {props.car.fuelType} - {props.car.color}</div>
                    <a href={productPageUrl} target="_blank">View details</a>
            </div>
       </div>
    )
}

export default CarInfo;