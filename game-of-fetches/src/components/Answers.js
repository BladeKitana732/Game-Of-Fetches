import React, { Component } from 'react';
import axios from 'axios';

export default class Answers extends Component {
    constructor(props)
    super(props)

   state = {
       data: []
   }

   componentDidMount() {
       
    axios.get("https://anapioficeandfire.com/api/characters/583")
    
    .then((result) => {
        const birth = result.data.born;

        console.log('John Snow was born', birth)

        this.setState({
            data: birth
        });
        
    })
    
    .catch((err) => {
        
    });
             
   }
   



    render() {
        return (
            <div>
                
            </div>
        )
    }
}

