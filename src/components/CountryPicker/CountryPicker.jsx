import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./CountryPicker.module.css";
import { NativeSelect, FormControl, StylesProvider } from "@material-ui/core";

import { fetchcountries } from "../../api";
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchcountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={cx(styles.formControl, StylesProvider.formControl)}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
