import React, { Component } from 'react';
import { state } from './nameFile';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuBar from './MenuBar';
import SingleLineGridList from './SingleLineGridList';

const styles = {
    root: {
        'margin-top':'20vh',
        'background-color':'RGBA(0,0,0,0.6)',
        'border-top':'1px solid skyblue',
    },
    font: {
        'margin':'3vw',
        'font-size':'20px',
        'color':'white',
        'padding-bottom':'20px',
        'border-bottom':'1px solid skyblue',
    }
};


class TechIntroduce extends Component {
    state = state
    render(){
        const { classes } = this.props;

        return(
            <Box>
                <MenuBar/>
                <Box className={classes.root}>
                    <Typography className={classes.font} style={{'margin-top':'7vh'}}>{this.state[this.props.match.params.name]}</Typography>
                    <SingleLineGridList/>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(TechIntroduce);
