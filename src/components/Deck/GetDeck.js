import { useEffect, useState } from 'react';
import axios from 'axios';

const GetDeck = () => {

 const [deck, setDeck] = useState([]);

 // The base url endpoint
 let apiUrl = 'https://rickandmortyapi.com/api/character/?page=';


 // Calculate a random url to give to the getUrl function
 const calculateRandomUrl = (apiEndpoint) => {
  return `${apiEndpoint}${Math.floor(Math.random() * 42) + 1}`;

 };

 // Get a url to be uses to collect a random character
 const getUrl = () => {
  return calculateRandomUrl(apiUrl);
 };

 const getRandomCharacterFromUrl = (resObj) => {
  const randomNumber = Math.floor(Math.random() * 20);
  const newCharacter = {
   name: resObj.data.results[randomNumber].name,
   status: resObj.data.results[randomNumber].status,
   gender: resObj.data.results[randomNumber].gender,
   image: resObj.data.results[randomNumber].image,
   location: resObj.data.results[randomNumber].location.name,
   species: resObj.data.results[randomNumber].species,
  };
  return newCharacter;
 };

 useEffect(() => {

 }, [deck]);

 // Get a new deck fo characters
 const getNewDeck = async () => {

  // Loop through and add the data to the arrays
  // for (let i = 0; i < 40; i++) {
  //  setUrlEndpoints(urlEndpoints => [...urlEndpoints, `${apiUrl}${Math.floor(Math.random() * 42) + 1}`]);
  //  setRandomCharacters(randomCharacters => [...randomCharacters, Math.floor(Math.random() * 20)]);
  // }

  axios.get(getUrl()).then(res => {
   for (let i = 0; i < 40; i++) {
    getRandomCharacterFromUrl(res);
    setDeck(deck => [...deck, getRandomCharacterFromUrl(res)]);
   }

   console.log('Deck :', deck);
   // console.log()
  }).catch(error => {
   console.log(error);
  });

  // Use the all method on axios to get a new character page for all the endpoints in the urlEndpoints array
  // axios.all(urlEndpoints).then(axios.spread((...allEndPoints) => {
  //  allEndPoints.forEach((url, index) => {
  //   axios.get(url).then((res) => {
  //    let charactersIndex = randomCharacters[index];

  //    if (typeof res.data.results[charactersIndex].name === undefined) {
  //     res.data.results[charactersIndex].name = '?';
  //    }

  //    setDeck(deck => [...deck, {
  //     name: res.data.results[charactersIndex].name,
  //     status: res.data.results[charactersIndex].status,
  //     species: res.data.results[charactersIndex].species,
  //     type: res.data.results[charactersIndex].type,
  //     gender: res.data.results[charactersIndex].gender,
  //     image: res.data.results[charactersIndex].image,
  //     location: res.data.results[charactersIndex].location.name,
  //    }]);

  //   }).catch(error => {
  //    console.log(error);
  //   });
  //  });
  // })
  // );
 };

 return { getNewDeck };
};

export default GetDeck;
