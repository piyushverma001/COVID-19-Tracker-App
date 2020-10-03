import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

export default ({ heading, value = 0, label, lastUpdate, styleClassName }) => (
  <Grid
    item
    component={Card}
    xs={12}
    md={3}
    className={cx(styles.card, styles[styleClassName])}
  >
    <CardContent>
      <Typography gutterBottom>{heading}</Typography>
      <Typography variant='h5'>
        <CountUp start={0} end={value} duration={2.5} separator=',' />
      </Typography>
      <Typography>{new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant='body2'>{label}</Typography>
    </CardContent>
  </Grid>
);
