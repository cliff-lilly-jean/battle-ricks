import { useEffect, useState } from 'react';
import axios from 'axios';

const GetDeck = () => {

 const [apiUrls, setApiUrls] = useState([]);
 const [deck, setDeck] = useState([]);

 // The base url endpoint
 let apiUrl = 'https://rickandmortyapi.com/api/character/?page=';


 // Calculate a random url to give to the getUrl function
 const calculateRandomUrl = (apiEndpoint) => {
  return `${apiEndpoint}${Math.floor(Math.random() * 42) + 1}`;
 };

 // Get a url to be used to collect a random character
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

 const addUrlToArr = () => {
  setApiUrls(apiUrls => [...apiUrls, getUrl()]);
 };

 useEffect(async () => {

 }, [deck]);

 // Get a new deck fo characters
 const getNewDeck = async () => {

  for (let i = 0; i < 60; i++) {
   addUrlToArr();
  }

  Promise.all(apiUrls.map(url => axios.get(url).then(res => {
   getRandomCharacterFromUrl(res);
   setDeck(deck => [...deck, getRandomCharacterFromUrl(res)]);
  }).catch(error => {
   console.log(error);
  })));
 };

 return { getNewDeck };
};

export default GetDeck;
