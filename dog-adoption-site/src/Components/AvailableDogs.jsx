import React, { Component } from 'react';

class AvailableDogs extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    };

    render() {
        // you're passing in `dogArray` as your array of dogs, not `DogsForAdoption`
        return (
            <div>
                {
                    this.props.DogsForAdoption.map(
                        (dog, index) => {
                            return (
                                <div key={index}>
                                    <p>Dog Name:{dog.DogName}</p>
                                    <p>Dog's Age:{dog.DogAge}</p>
                                    <p>Dog Breed:{dog.DogBreed}</p>
                                    <p>Potty Trained?:{dog.PottyTrained}</p>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
};

export default AvailableDogs;