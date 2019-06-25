import React from 'react';
import { Dropdown } from './Dropdown';
import '../styles/FilterCars.scss';
interface FilterCarProps{
   colors: Array<String>,
   manufacturers: any,
   filterCars: any
}

export  class FilterCars extends React.Component<FilterCarProps, any> {
   constructor(props: FilterCarProps) {
       super(props);
       this.state = {
           manufacturers: this.props.manufacturers.map((m: any) => m.name),
           selectedColor:"All Colors",
           selectedManufacturer: "All Manufacturers"
       }
       this.setSelectedColor = this.setSelectedColor.bind(this);
       this.setSelectedManufacturer = this.setSelectedManufacturer.bind(this);
       this.filterCars = this.filterCars.bind(this);
   }

   filterCars() {
       const selectedColor = this.state.selectedColor === 'All Colors' ? '' : this.state.selectedColor;
       const selectedManufacturer = this.state.selectedManufacturer === 'All Manufacturers' ? '' : this.state.selectedManufacturer;
       this.props.filterCars(selectedColor, selectedManufacturer);
   }
   setSelectedColor(color: String) {
    const val = color === 'All' ? 'All Colors' : color;
    this.setState({
        selectedColor : val
    })
   }

   setSelectedManufacturer(manufacturer: String) {
    const val = manufacturer === 'All' ? 'All Manufacturers' : manufacturer;
    this.setState({
        selectedManufacturer: val
    })
   }
   
    render() {
        return(
            <section className="cars__filter">
                <div className="cars__filter_item">
                    <span>Color</span>
                    <Dropdown data={this.props.colors} selected={this.state.selectedColor} setSelected={this.setSelectedColor} showAll={true}></Dropdown>
                </div>
                <div className="cars__filter_item">
                    <span>Manufacturer</span>
                    <Dropdown data={this.props.manufacturers.map((m: any) => m.name)} selected={this.state.selectedManufacturer} setSelected={this.setSelectedManufacturer} showAll={true}></Dropdown>
                </div>
                <button className="car__filter_button" onClick={this.filterCars}>Filter</button>
            </section>
        )
    }
}