import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:3001/api/cities?city=${searchValue}`)
    .then((res) => {
      setResults(res.data);
    })
  }, [searchValue])

  const dataMetropole = results.metropole;
  const dataOutremer = results.outremer;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="m-6">
      <div className="container flex justify-center mx-auto">
          <div className="flex border-2 rounded">
              <button className="flex items-center justify-center px-4 border-r">
                  Je recherche...
              </button>
              <input 
              value={searchValue}
              onChange={handleChange}
              type="text" className="px-4 py-2 w-80" placeholder="ville, code postal..."/>
          </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-1/2 text-lg">
        <p className='text-xl font-bold'>
          Villes de métropole
        </p>
          <ul className='flex flex-col'>
            {
              dataMetropole &&
              dataMetropole.map((city, key) =>
                <li id={key}>
                  {city.nomCommune} {city.codePostal}
                </li>
              )
            }
          </ul>
        </div>
        <div className="text-lg">
        <p className='text-xl font-bold'>
          Villes d'outre-mer
        </p>
          <ul className='flex flex-col'>
            {
              dataOutremer &&
              dataOutremer.map((city, key) =>
                <li id={key}>
                  {city.nomCommune} {city.codePostal}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}


export default App;
