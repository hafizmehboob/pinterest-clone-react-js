import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
import unsplah from './api/unsplah';
import { useEffect, useState } from 'react';
function App() {
  const [pins, setNewPins] = useState([]);
  const getImages = (term) => {
    return unsplah.get('https://api.unsplash.com/search/photos',{
      params:{
        query: term
      }
    });
  };

  let showPinsOnPageLoad = () => {
      let promises = [];
      let pinData = [];
      let pins = ['cars','Tokoyo','Bikes','Mountains','Canada'];

      pins.forEach((pinTerms) => {
        promises.push(
          getImages(pinTerms).then(result => {
            let getResults = result.data.results;
            
            pinData = pinData.concat(getResults);
            pinData.sort(function(a, b){
              return 0.5 - Math.random();
            })

          })
        )
      });
       Promise.all(promises).then(() => {
             setNewPins(pinData);
       })

  }

  useEffect (() => {
    showPinsOnPageLoad();
  }, []);

  const onSearchSubmit = (term) => {
     getImages(term).then(result => {
            let results = result.data.results;
            let newPins = [
              ...results,
              ...pins,
            ]
            console.log('New Pins' + newPins);
            newPins.sort(function(a, b){
              console.log('Random Numbers ', 0.5 - Math.random());
              return 0.5 - Math.random();
            });

            setNewPins(newPins);
          })
       
      }
  
  return (
    <div className="app">
     <Header onSubmit={onSearchSubmit} />
     <MainBoard pins={pins} />
    </div>
  );
}

export default App;
