import React, { useState, useEffect } from "react";
import Select from "react-select";
import cx from "classnames";
import { FormControl, StylesProvider, Typography } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchcountries } from "../../api";

const formatOptionsForSelect = (options) =>
  options.map((option) => ({ value: option, label: option }));

const CountryPickerAutoCompleteDropdown = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchcountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={cx(styles.formControl, StylesProvider.formControl)}>
      <Typography className={cx(styles.selectLabel)}>
        Select a Country:
      </Typography>
      <Select
        options={formatOptionsForSelect(fetchedCountries)}
        isSearchable={true}
        placeholder='Global'
        onChange={(e) => {
          handleCountryChange(e.value);
        }}
      />
    </FormControl>
  );
};

export default CountryPickerAutoCompleteDropdown;
