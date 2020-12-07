import React, {Component} from 'react';
import "./Car.css"

class CarComponent extends Component {
    render() {
        let{car, cls}=this.props;
        return (
            <div className={cls}>
                {car.model} - {car.year} - {car.color} - DRIVER:( {car.driver.Name} ; {car.driver.skills} )
            </div>
        );
    }
}

export default CarComponent;