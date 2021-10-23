import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import Searchbar from './components/Header/Searchbar/Searchbar';
import React, { useState } from 'react';

function App() {
  
  let hotels = [

    {
      id:1,
      nameHotel: "Pod rozami",
      location: "Warszawa",
      rating: 6,
      description: "lorem ipsum"
    },
    {
      id:2,
      nameHotel: "debowy",
      location: "Krakow",
      rating: 10,
      description: "lorem ipsum"
    }

  ]


  const [newHotels, setNewHotels] = useState(hotels)
    
    const onSearch = (term) => {


      const filterHotels = [...hotels].filter(x => x.nameHotel.toLowerCase().includes(term.toLowerCase()) || x.location.toLowerCase().includes(term.toLowerCase()))
      setNewHotels(filterHotels)

      // const filterHotels = [...hotels].filter(x => x.nameHotel.toLowerCase().includes(term.toLowerCase()) || x.location.toLowerCase().includes(term.toLowerCase()))
      // setNewHotels(filterHotels)

    }

    return (
    <div className="App">
      <Header>
        <Searchbar onSearch = {(term) => onSearch(term)}/>
      </Header>
      <Menu />
      <Hotels hotels = {newHotels}/>
    </div>
  );
}

export default App;
