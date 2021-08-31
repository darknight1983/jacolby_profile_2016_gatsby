import React, {} from 'react';
import SEO from '../components/seo';
import { Grid } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import { PopupWidget, PopupButton } from 'react-calendly';
import { makeStyles } from '@material-ui/styles';
import MeetForCoffeePic from '../components/MeetForCoffeePic';
import { rollIn, zoomInUp } from 'react-animations'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import EmailIcon from '@material-ui/icons/Email'

const rollInAnimation = keyframes`${rollIn}`;
const RollHeading = styled.div`
  animation: 3s ${rollInAnimation};
`

const ZoomInUpAnimation = keyframes`${zoomInUp}`;
const ZoomInUpDiv = styled.h2`
  animation: infinite 5s ${ZoomInUpAnimation};
`;

const useStyles = makeStyles( theme => ({
  content: {
    textAlign: 'center',
    fontFamily: 'Quicksand',
    marginTop: '100px',
  },
  message: {
    width: '80%',
    margin: '50px auto'
  },
  popup: {
    color: '#fff',
    cursor: 'pointer',
    background: '#000',
    border: 'none',
    fontWeight: 'bold',
    width: 'auto',
    height: 'auto',
    padding: 15,
    marginTop: 30,
    marginBottom: 30,
    '&:hover': {
      color: '#000',
      background: '#fff',
      border: '#000'
    }
  },
  socialIconWrap: {
    marginTop: '70px',
    marginBottom: '70px'
  },
  armyGreen: {
    color: '#4b5320'
  },
  darkPurple: {
    color: '#800080'
  },
  header: {
    lineHeight: 1.4
  }
}));


const ConsultationPage = () => {
  const classes = useStyles();

  return (
    <div>
      <SEO title='Consultation'/>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <div className={classes.content}>
            <h1 className={classes.header}>How about over a coffee? If not, Facetime or Zoom works fine.</h1>
            <p className={classes.message}>
              My goal during the consultation is to get answers to critical questions that
              will help me understand the scope of your project. For instance, can you describe
              your business in a few sentences? What specific features do you want? Do you have
              a website? If so, what is/isn't working for you?
            </p>
            <RollHeading>
              <PopupButton
                url={`https://calendly.com/techifyllc/30min`}
                text={`Schedule a Meeting`}
                className={classes.popup}
              />
            </RollHeading>
            <div className={classes.socialIconWrap}>
              <Grid container xs={12} justify={'space-evenly'}>
                <Grid item>
                  <a href={'https://twitter.com/CoodyMac'}>
                    <TwitterIcon className={classes.armyGreen}/>
                  </a>
                </Grid>
                <Grid item>
                  <a href={'https://www.instagram.com/darknightnov/'}>
                    <InstagramIcon className={classes.armyGreen}/>
                  </a>
                </Grid>
                <Grid item>
                  <a href={'mailto:darknightnov@gmail.com'}>
                    <EmailIcon className={classes.armyGreen}/>
                  </a>
                </Grid>
              </Grid>
            </div>
            <div className={classes.message}>
              <ZoomInUpDiv className={classes.darkPurple}>
                "Techify"... All The Things
              </ZoomInUpDiv>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div>
            <MeetForCoffeePic/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ConsultationPage;

