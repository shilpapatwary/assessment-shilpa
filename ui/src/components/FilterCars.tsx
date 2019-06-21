import React from 'react';


interface FilterCarProps{
   
}

export  class FilterCars extends React.Component<FilterCarProps, any>{
   constructor(props: FilterCarProps) {
       super(props);
   }

   
    render() {
        return(
            <div>Filtering Cars</div>
        )
    }
}