import React from 'react'
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid, Link} from '@material-ui/core'
import cs from 'classnames'
const Cards = ( {data:{confirmed, recovered, deaths, lastUpdate}, country}) => {

    if(!confirmed) {
        return "Loading...";
    }

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cs(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases of Covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cs(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recoveries from Covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cs(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths caused by Covid-19
              </Typography>
            </CardContent>
          </Grid>
          {country === 'India'?(
            <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cs(styles.card, styles.registration)}
          >
            <CardContent>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                <a href="https://www.cowin.gov.in/home" style={{textDecoration:'none', color:'rgb(128,0,255)'}}>Registration For Vaccine</a>
              </Typography>
              
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              
            </CardContent>
          </Grid>
          ):null}
        </Grid>
      </div>
    );
}

export default Cards
