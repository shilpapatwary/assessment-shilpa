import React from 'react';
import '../styles/Dropdown.scss';

interface DropdownProps{
    data: any,
    selected: String,
    setSelected: any,
    showAll: Boolean
}
export class Dropdown extends React.Component<DropdownProps, any>{
    constructor(props: DropdownProps) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openDropdown = this.openDropdown.bind(this);
        this.selectDropdownItem = this.selectDropdownItem.bind(this);
    }
    openDropdown(){
        let openStatus = this.state.isOpen ? false : true;
        this.setState({
            isOpen: openStatus
        });
    }
    selectDropdownItem(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        const data:any = event.currentTarget.textContent;
        this.setState({
            isOpen: false
        });
        this.props.setSelected(data);
    }
    render(){
        const titleClass = this.state.isOpen ? "dropdown__title open" : "dropdown__title close";
        const allText = this.props.showAll ? "All" : "None";
        return (
            <React.Fragment>
                <div className={titleClass} onClick={this.openDropdown}>{this.props.selected}</div>
                {this.state.isOpen && <div className="dropdown__menu">
                <ul>
                <li onClick={this.selectDropdownItem}>{allText}</li>
                    {this.props.data && this.props.data.map((option: String, index:any) => {
                       return <li key={index} onClick={this.selectDropdownItem}>{option}</li>
                    })}
                </ul>
                </div>}
            </React.Fragment>
            
        )
    }
} 