import './App.css';
import Data from "./MOCK_DATA.json";
import { useState } from 'react';


const App = () => {
  const [searchName, setSearchName] = useState("");
  const [filterData, setFilterData] = useState([])
  // setSearchName()

  
  const handlerFilter = (event) => {
    const search_name = event.target.value;
    setSearchName(search_name)
    console.log(search_name)
    const newNameFilter = Data.filter((value) => {
      return value.first_name.toLowerCase().includes(search_name.toLowerCase())
    });

    if (search_name === "") {
      setFilterData([])
    } else {
      setFilterData(newNameFilter);
    };

    setSearchName(search_name)

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
            {filterData.map((value, key) => {
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
