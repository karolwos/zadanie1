import React from 'react';
import { Link } from 'react-router-dom';
import screen from './screen.png';

export default () => {
  return (
    <div>
    
      Usluga zostala opracowana na bazie laboratorium 9
      Zmienione rzeczy:
      Dockerfile : uzywanie uzytkownika node , dodanie wersji dev;
      docker-compose: dodanie wersji dev i klienckiej;
      Strona: dodanie podstron, zmiana css;
      Port: zmiana portu 3050 na localhost;
      
      
   
     
    <img src={screen} width="700px" height="400px" alt="working" />
    
    </div>
   
  );
};
