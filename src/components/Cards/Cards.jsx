import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ( {data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if(!confirmed) {
    return 'Loading...';
  }

    return (
       <div className={styles.container}>
      <Grid container spacing={3} justify="center" >
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} style={{margin: "5px", boxShadow: "0px 10px 25px #000000"}}>
            <CardContent>
                <Typography color="primary" style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px"}}gutterBottom>Infected</Typography>
                <Typography variant="h5" style={{ textAlign: "center"}}>
                    <CountUp start={0} end={confirmed.value} duration={2.5} separator=","  style={{ textAlign: "center"}}/>
                    </Typography>
                <Typography  style={{ textAlign: "center", fontWeight: "bold", marginTop: "10px", marginBottom: "10px"}} color="textSecondary">{new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography  style={{ textAlign: "center", color: "blue"}} variant="body2">Number of active cases of COVID-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} style={{margin: "5px", boxShadow: "0px 10px 25px #000000"}}>
            <CardContent>
                <Typography style={{color: "green", textAlign: "center", fontWeight: "bold", fontSize: "30px"}} gutterBottom>Recovered</Typography>
                 <Typography  style={{ textAlign: "center"}} variant="h5">
                    <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography  style={{ textAlign: "center", fontWeight: "bold", marginTop: "10px", marginBottom: "10px"}} color="textSecondary">{new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography  style={{ textAlign: "center", color: "green"}} variant="body2">Number of recoveries from COVID-19</Typography>
            </CardContent>
        </Grid>         
         <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)} style={{margin: "5px", boxShadow: "0px 10px 25px #000000"}}>

            <CardContent>
                <Typography  style={{ textAlign: "center"}} style={{color: "red", textAlign: "center", fontWeight: "bold", fontSize: "30px"}} gutterBottom>Deaths</Typography>
                 <Typography  style={{ textAlign: "center"}} variant="h5">
                    <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                    </Typography>
                    <Typography  style={{ textAlign: "center", fontWeight: "bold", marginTop: "10px", marginBottom: "10px"}} color="textSecondary">{new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography  style={{ textAlign: "center", color: "red"}} variant="body2">Number of deaths caused by COVID-19</Typography>
            </CardContent>
        </Grid>
        </Grid>
        </div>
    )
}

export default Cards;