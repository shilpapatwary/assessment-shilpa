import React from 'react';

interface PaginationProps{
    pagesCount: any,
    currentPage: any,
    getCarsByPage: any
}

export class Pagination extends React.Component<PaginationProps, any>{
    constructor(props: PaginationProps) {
        super(props);

       this.getCarsByPage = this.getCarsByPage.bind(this);
    }
    getCarsByPage(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        const paginationLink = event.currentTarget.textContent;
        let page;
        switch(paginationLink){
            case 'First':
                page = 1;
                break;
            case 'Last':
                page = this.props.pagesCount;
                break;
            case 'Previous':
                page = this.props.currentPage - 1;
                break;
            case 'Next':
                page = this.props.currentPage + 1;
                break;
            default:
                page = this.props.currentPage
                break;
        }
        this.props.getCarsByPage(page);
    }
        
    render() {
        return(
            <ul className="pagination__list">
                        {this.props.currentPage > 1 && <li className="pagination__list_item" onClick={this.getCarsByPage}><span>First</span></li>}
                        {this.props.currentPage > 1 && <li className="pagination__list_item previous" onClick={this.getCarsByPage}><span>Previous</span></li>}
                        <li className="pagination__list_item">Page {this.props.currentPage} of {this.props.pagesCount}</li>
                        {this.props.currentPage < this.props.pagesCount && <li className="pagination__list_item next" onClick={this.getCarsByPage}><span>Next</span></li>}
                        {this.props.currentPage < this.props.pagesCount && <li className="pagination__list_item" onClick={this.getCarsByPage}><span>Last</span></li>}
            </ul>
        );
    }
}