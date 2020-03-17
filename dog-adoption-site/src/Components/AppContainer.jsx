import React, { Component } from 'react'; //Import Base Component from Default React Module
import AvailableDogs from './AvailableDogs';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        // Create an array of objects to iterate through
        this.state = {
            DogsForAdoption: [
                {
                    DogName: "Grizz",
                    DogAge: 12,
                    DogBreed: "Schnauzer",
                    PottyTrained: true
                },

                {
                    DogName: "Gizmo",
                    DogAge: 4,
                    DogBreed: "Schnauzer",
                    PottyTrained: true
                },

                {
                    DogName: "Cujo",
                    DogAge: 39,
                    DogBreed: "St.Bernard",
                    PottyTrained: false
                },

                {
                    DogName: "Lassie",
                    DogAge: 77,
                    DogBreed: "Collie",
                    PottyTrained: true
                },
            ]
        }
    };

render() {
    return (
        <div>
            {/* <h1>I am a test!</h1> */}
            <AvailableDogs dogArray={this.state.DogsForAdoption}/>
        </div>
    )
};
};

export default AppContainer;