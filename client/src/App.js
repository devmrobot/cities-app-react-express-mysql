import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  const fetchCities = async () => {
    const res = await axios
    .get(`http://localhost:3001/api/cities?city=${searchValue}`);
    setResults(res.data)
  }

  useEffect(() => {
    fetchCities();
  }, [searchValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="m-6">
      <div className="flex justify-center">
          <div className="flex border-2 rounded w-full">
              <button className="h-20 w-2/5 text-3xl font-bold flex items-center justify-center px-4 border-r bg-[#D2E5E9]">
                  Je recherche...
              </button>
              <input 
              value={searchValue}
              onChange={handleChange}
              type="text" className="px-4 py-2 w-full" placeholder="ville, code postal..."/>
          </div>
      </div>
      <div className='flex gap-x-10 mt-20'>
          <div className="text-lg bg-[#D2E5E9] w-full text-center rounded-md">
            <p className='text-3xl font-bold p-6'>
              Villes de métropole
            </p>
            <div>
            { 
              searchValue != "" ?
              !results.metropole || results.metropole.length === 0 ?
              <div className='flex bg-red-600 mx-4 p-4'>
              {
              `Aucune ville correspondant au texte saisi`
              }
              </div>
              :
              <div className='flex bg-green-600 mx-4 p-4'>
              {
              `${results.metropole.length} ville(s)correspondant au texte saisi`
              }
              </div>
              :
              ""
            }
            </div>
              <ul className='grid grid-cols-2'>
                {
                  results.metropole && results.metropole.length > 0 ?
                  results.metropole.map((city, key) =>
                    <li className="flex justify-between bg-slate-500 p-2 m-4 text-zinc-50" id={key}>
                      <p className='font-bold text-left'>
                        {city.nomCommune}
                      </p>
                      <p className='opacity-30'>
                        {city.codePostal}
                      </p>
                    </li>
                  )
                  :
                  ''
                }
              </ul>
          </div>
          <div className="text-lg bg-[#D2E5E9] w-full text-center rounded-md">
            <p className='text-3xl font-bold p-6'>
              Villes d'outre-mer
            </p>
            { 
              searchValue != "" ?
              !results.outremer || results.outremer.length === 0 ?
              <div className='flex bg-red-600 mx-4 p-4'>
              {
              `Aucune ville correspondant au texte saisi`
              }
              </div>
              :
              <div className='flex bg-green-600 mx-4 p-4'>
              {
              `${results.outremer.length} ville(s)correspondant au texte saisi`
              }
              </div>
              :
              ""
            }
              <ul className='grid grid-cols-2'>
                {
                  results.outremer && results.outremer.length > 0 ?
                  results.outremer.map((city, key) =>
                  <li className="flex justify-between bg-slate-500 p-2 m-4 text-zinc-50" id={key}>
                  <p className='text-left font-bold'>
                    {city.nomCommune}
                  </p>
                  <p className='opacity-30'>
                    {city.codePostal}
                  </p>
                </li>
                  )
                  :
                  ''
                }
              </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
