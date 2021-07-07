import React from 'react'
import Leftbar from '../LeftBar/Leftbar'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import useStyles from './style'

const Profile = () => {

 const classes = useStyles();
 
    return (
        <div>
             <Leftbar />   
            <Container className={classes.paddingTop}>
                <Grid container spacing={0}>
                    <Grid item xs={3} md={3}></Grid>
                    <Grid item xs={6} md={6} >    
                          <div className={classes.root} >
                            <Paper elevation={3}>
                                <h2>Full Name : Amal Perera</h2>
                                <h2>Address : No 10,Galle road,Rathmalana.</h2>
                                <h2>email : amal@gmail.com</h2>
                            </Paper>
                          </div>
                    </Grid>
                </Grid>
            </Container>
      </div>
    )
}

export default Profile;
