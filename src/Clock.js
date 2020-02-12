import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        'display':'absolute',
        'margin-top':'40vh',
        'text-align':'center',
    },
    font: {
        'color':'white',
        'font-size':'40px',
    },
};


class Clock extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        date : new Date()
    }
    render() {
        const {date} = this.state;
        const { classes } = this.props;
        return(
            <Typography className={ classes.root }component='div'>
                <Box className={classes.font}>{date.getDate()}Day, {date.getMonth()}Month</Box>
                <Box className={classes.font}>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</Box>
            </Typography>
        );
    }

    getDate = () => {
        this.setState({
            date: new Date()
        });
    };
    componentDidMount() {
        this.oneMinuteCall = setInterval(() => this.getDate(),1000);
    }
    ComponentWillUnmount() {
        clearInterval(this.oneMinuteCall);
    }
}
export default withStyles(styles)(Clock);
