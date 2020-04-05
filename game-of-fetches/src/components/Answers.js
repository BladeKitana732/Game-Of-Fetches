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

    let alias = "http://www.anapioficeandfire.com/api/characters/901";    

    //nested api call to get answer. first url to get to url for founder
    let nestedOne = "https://www.anapioficeandfire.com/api/characters/209";

    // let firstApi = "https://www.anapioficeandfire.com/api/houses/362";


    //needing to use .all() method to call name titles of books from each api url
    let bookTitle1 = "https://www.anapioficeandfire.com/api/books/1";

    let bookTitle2 = "https://www.anapioficeandfire.com/api/books/2";

    let bookTitle3 = "https://www.anapioficeandfire.com/api/books/3";

    //variables to pull name of titles to use .all() method
    const name1 = axios.get(bookTitle1);
    const name2 = axios.get(bookTitle2);
    const name3 = axios.get(bookTitle3);

    axios.all([name1, name2, name3])
    .then(
        //needed to use .spread method in order to assign the properties of the data array to the separate variables; it is also used to unpack values from the data array. used resource: https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
        axios.spread((title1, title2, title3) => {
            console.log(title1.data.name, 'is book one title')
            console.log(title2.data.name, 'is book two title')
            console.log(title3.data.name, 'is book three title')
        })
    )


    axios.get(nestedOne) 
    .then((result) => {
        const founder = result.data.name;

        console.log(founder, 'was the founder of House Stark')
    })




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
        const birth1 = result.data.born;

        console.log('Margaery was born', birth1)

        this.setState({
            data: birth1
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

    axios.get(alias)
    
    .then((result) => {
        const secondAlias = result.data.aliases;

        console.log('Robert Baratheon\'s second alias is', secondAlias[1])

        // this.setState({
        //     data: aliases
        // })
        
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


             
   
}



    render() {
        return (
            <div>
                <h2>Questions and answers.</h2>
                <h4>When was Jon Snow born?</h4>
                <p>{ this.state.birth }</p>

                <h4>Where was Margaery Tyrell born?</h4>
                <p></p>

                <h4>What region is House Targaryen in?</h4>
                <p></p>

                <h4>What's the coat of arms of House Lannister?</h4>
                <p></p>

                <h4>What is the second seat of House Baratheon?</h4>
                <p></p>

                <h4>What is Robert Baratheon's second alias?</h4>
                <p></p>

                <h4>What's the name of the founder of House Stark?</h4>
                <p></p>

                <h4>What are the titles of Catelyn Stark's three POV books?</h4>
                <p></p>

            </div>
        )
    }


}

