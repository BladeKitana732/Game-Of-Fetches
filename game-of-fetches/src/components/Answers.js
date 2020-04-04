import React, { Component } from 'react';
import axios from 'axios';

export default class Answers extends Component {

   state = {
       data: []
   }

   componentDidMount() {

    let johnsBirth = "https://anapioficeandfire.com/api/characters/583";
    
    let margaeryLocation = "https://anapioficeandfire.com/api/characters/16";
    
    let tarHouse = "http://www.anapioficeandfire.com/api/houses/378";

    let armsOfLannister = "https://www.anapioficeandfire.com/api/houses/229";

    let secondSeat = "http://www.anapioficeandfire.com/api/houses/17";



    axios.get(johnsBirth)
    
    .then((result) => {
        const birth = result.data.born;

        console.log('John Snow was born', birth)

        this.setState({
            data: birth
        });
        
    })
    
    .catch((err) => {

        console.log('Error has been computed', err)

    });

    axios.get(margaeryLocation)
    
    .then((result) => {
        const birth = result.data.born;

        console.log('Margaery was born', birth)

        this.setState({
            data: birth
        });
        
    })
    
    .catch((err) => {

        console.log('Error has been computed', err)

    });


    axios.get(tarHouse)
    
    .then((result) => {
        const region = result.data.region;

        console.log('The region the House of Targaryen is in ', region)

        this.setState({
            data: region
        });
        
    })
    
    .catch((err) => {

        console.log('Error has been computed', err)

    });

    axios.get(armsOfLannister)

    .then((result) => {
        const arms = result.data.coatOfArms;

        console.log('The coat of arms for House of Lannister is ', arms)

        this.setState({
            data: arms
        });


    })

    .catch((err) => {

        console.log('Error has been computed', err)

    });

    axios.get(secondSeat)
    
    .then((result) => {
        const seat = result.data.seats;

        console.log('The second seat of Baratheon House is', seat[1])

        this.setState({
            data: seat
        });
        
    })
    
    .catch((err) => {

        console.log('Error has been computed', err)

    });
             
   
}



    render() {
        return (
            <div>
                
            </div>
        )
    }


}

