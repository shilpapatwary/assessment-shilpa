import React from 'react';
import '../styles/Loading.scss';
const Loading = () => {
    return(
        <React.Fragment>
            <div className="loading__section">
                    <div className="car__info_image"></div>
                    <div className="car__info_text loading__text">
                        <div className="heading__bold loading__heading"></div>
                        <div></div>
                        <div></div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Loading;