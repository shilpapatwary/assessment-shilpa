import React from 'react';


interface CarsListingProps{
   
}

export  class CarsListing extends React.Component<CarsListingProps, any>{
   constructor(props: CarsListingProps) {
       super(props);
   }

   
    render() {
        return(
            <div>Cars Listing</div>
        )
    }
}