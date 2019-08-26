import React from 'react';
import Character from "./Character";

const starWarsChars = [
  {name: 'Luke Skywalker', side: 'Light'},
  {name: 'C-3PO', side: 'Light'},
  {name: 'R2-D2', side: 'Light'},
  {name: 'Darth Vader', side: 'Dark'}
];

const App = ({side}) => {

  if(!side){
    side = 'Light'
  }

  const filtered = starWarsChars.filter(item => item.side === side);

  return(
    <ul>
      {filtered.map((item, index) =>
        <Character name={item.name} side={item.side} key={index}>

        </Character>
      )}
    </ul>
  )
};

export default App;


