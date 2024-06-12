import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(Object.values(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(countries);
  // console.log(typeof countries);
  // console.log(countries);
  // console.log(countries[0]);

  countries.map((c) => {
    console.log(c);
  });

  return (
    <div>
      <form>
        find countries
        <input value={value} onChange={handleChange} type="text" />
      </form>
      {/* <Countries countries={countries} /> */}
      {countries.map((c) => {
        console.log(c.name.common);
      })}
    </div>
  );
};

export default App;
