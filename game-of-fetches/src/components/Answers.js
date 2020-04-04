import React, { Component } from 'react';
import axios from 'axios';

export default class Answers extends Component {

   state = {
       data: []
   }

   componentDidMount() {

    let johnsBirth = "https://anapioficeandfire.com/api/characters/583";
    let margaeryLocation = "https://anapioficeandfire.com/api/characters/16";
    let 
       
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

    axios.get()
    
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
             
   }
   



    render() {
        return (
            <div>
                
            </div>
        )
    }
}

