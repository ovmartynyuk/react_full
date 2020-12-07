import React, {Component} from 'react';
import {cars} from "./DataBase/Cars";
import CarComponent from "./Component/Car/CarComponent";

class App extends Component {
    render() {
        return (

            <div>
                {
                    cars.map((car, index) => {
                        let cls = index % 2 ? "chn1" : "chn2";
                        return (<CarComponent car={car} cls={cls} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default App;