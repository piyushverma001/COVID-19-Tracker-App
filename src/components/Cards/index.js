import React from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} alignItems={"center"} justify='center'>
        <Card
          heading='Infected'
          value={confirmed.value}
          label='Number of Active Cases of COVID-19'
          lastUpdate={lastUpdate}
          styleClassName='infected'
        />
        <Card
          heading='Recovered'
          value={recovered.value}
          label='Number of Recovered Cases of COVID-19'
          lastUpdate={lastUpdate}
          styleClassName='recovered'
        />
        <Card
          heading='Deaths'
          value={deaths.value}
          label='Number of Deaths of COVID-19'
          lastUpdate={lastUpdate}
          styleClassName='deaths'
        />
      </Grid>
    </div>
  );
};

export default Cards;
