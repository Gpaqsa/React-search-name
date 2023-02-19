import './App.css';
import Data from "./MOCK_DATA.json";
import { useState } from 'react';


const App = () => {
  const [searchName, setSearchName] = useState("");
  const [filterData, setFilterData] = useState([])

  const handlerFilter = (event) => {
    const searchName = event.target.value;
    const newNameFilter = Data.filter((value) => {
      return (value.first_name.toLowerCase().includes(searchName.toLowerCase()))
    });


    if (searchName === " ") {
      setFilterData([])
    } else {
      setFilterData(newNameFilter);
    };
  }

  return (
    <div className="app">

      <section className='search-box'>
        <input
          value={searchName}
          onChange={handlerFilter}
          placeholder="Search for name"
        />
      </section>

      <section className='names-container'>

        <div className='empty'>
          <h1>Name Data</h1>
          <hr />
          <div className='names'>
            {Data.map((value, key) => {
              return (<div key={key}>
                <p >{value.first_name}</p>
              </div>)
            })}
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
