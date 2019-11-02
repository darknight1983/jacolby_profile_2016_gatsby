
// We are going to try the react-animations library since it seems to be the most
// easy to work with for the time being.

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfilePic from '../components/ProfilePic'
import {
  Grid,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import styled, { keyframes } from 'styled-components';
import { tada, zoomInUp } from 'react-animations';
import SEO from '../components/seo';

const tadaAnimation = keyframes`${tada}`;
const TadaHeading = styled.h1`
  animation: infinite 1s ${tadaAnimation};
  font-family: Quicksand;
  text-align: center;
`;

const ZoomInUpAnimation = keyframes`${zoomInUp}`;
const ZoomInUpDiv = styled.h2`
  animation: infinite 5s ${ZoomInUpAnimation};
`;




const useStyles = makeStyles(theme => ({
  grid1: {

    backgroundColor: "#F4F4F4",
  },
  name: {
    fontFamily: 'Quicksand',
  },
  content: {
    textAlign: 'center',
    fontFamily: 'Quicksand',
    marginTop: '100px',
  },
  bio: {
    width: '80%',
    margin: '50px auto'
  },
  socialIconWrap: {
    marginTop: '70px'
  },
  message: {
    marginTop: '100px'
  },
  armyGreen: {
    color: '#4b5320'
  },
  darkPurple: {
    color: '#800080'
  }
}))
const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <SEO title='Home'/>
      <Grid container>
        <Grid item xs={12} lg={6} className={classes.grid1}>
          <div className={classes.content}>
            <h1 className={classes.name}>Hi, Im Jacolby and </h1>
            <TadaHeading>
              I build websites!!!
            </TadaHeading>
            <p className={classes.bio}>
              I enjoy helping people build their brands by leveraging technology
              to make the unthinkable, possible. Do you have an idea, brand, or
              just something you want to put out to the masses? If so, let's connect
              because I would love to talk with you and ponder on how to get your
              idea out to the world.
            </p>
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
              {/*Message goes here*/}
              <ZoomInUpDiv className={classes.darkPurple}>
                All Things... "Techified"
              </ZoomInUpDiv>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div>
            <ProfilePic/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}


export default Home;
