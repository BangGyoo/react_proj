import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { nodeName } from './nameFile';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        'margin-top':'9vh',
        'height':'90vh',
        'width':'450px',
        'background-color':'black',
    },
    font: {
        'color':'white',
        'margin':'1vw',
        'font-size':'30px',
        'padding':'22px',
        'border-bottom':'1px solid navy',
    },
    Xline: {
        'position':'relative',
        'width':'60vw',
        'height':'1vh',
        'background-color':'purple',
        'top':'-26px',
        'left':'400px',
        'animation-name':'duration',
        'animation-duration':'2s',
    },
    Yline: {
        'position':'absolute',
        'font-size':'40px',
        'width':'1vh',
        'padding-top':'0px',
        'background-color':'purple',
        'top':'0px',
        'left':'0px',
        'white-space' : 'nowrap',
        'animation' : 'Open 1 0.5s linear',
        'text-decoration' : 'none',
        '&:link' : {
            'color' : 'white',
        }
    },
}

class TechStack extends Component{
    
    state = {
        changer : [true,false,false,false,false],
    };

    introduce = nodeName;

    clickLang = (e) => {
      this.setState(() => ({
        changer : [true, false, false, false, false]
      }))
    };
    clickData = (e) => {
      this.setState(() => ({
        changer : [false, true, false, false, false]
      }))
    };
    clickTheory = (e) => {
      this.setState(() => ({
        changer : [false, false, true, false, false]
      }))
    };
    clickGraphics = (e) => {
      this.setState(() => ({
        changer : [false, false, false, true, false]
      }))
    };
    clickEnv = (e) => {
      this.setState(() => ({
        changer : [false, false, false, false, true]
      }))
    };
    clickText = (e) => {
      location.href="#" + e.target.innerText;
    };


    render(){
        const {classes} = this.props;

        return(
           <Box className={classes.root}>
               <Typography className={classes.font} onClick={this.clickLang}> 
                    {this.introduce[1]}
                    {this.state.changer[0] ?
                    <Box className={classes.Xline}>
                        <Link to={`/TechIntroduce/${this.introduce[6]}`} className={classes.Yline} style={{'padding-top':'200px',left:'30%',top:'0px'}}>{this.introduce[6]}</Link>
                        <Link to={`/TechIntroduce/${this.introduce[7]}`} className={classes.Yline} style={{'padding-top':'300px',left:'60%',top:'0px'}}>{this.introduce[7]} </Link>
                        <Link to={`/TechIntroduce/${this.introduce[8]}`} className={classes.Yline} style={{'padding-top':'400px',left:'90%',top:'0px'}}>{this.introduce[8]} </Link>
                    </Box> : null}
               </Typography>
               <Typography className={classes.font} onClick={this.clickData}> 
                    {this.introduce[2]}
                    {this.state.changer[1] ? 
                    <Box className={classes.Xline}>
                        <Link to={`/TechIntroduce/${this.introduce[9]}`} className={classes.Yline} style={{'padding-top':'200px',left:'40%',top:'0px'}}>{this.introduce[9]}</Link>
                        <Link to={`/TechIntroduce/${this.introduce[10]}`} className={classes.Yline} style={{'padding-top':'300px',left:'80%',top:'0px'}}>{this.introduce[10]} </Link>
                    </Box> : null}
               </Typography>
               <Typography className={classes.font} onClick={this.clickTheory}> 
                    {this.introduce[3]}
                    {this.state.changer[2] ? 
                    <Box className={classes.Xline}>
                        <Link to={`/TechIntroduce/${this.introduce[11]}`} className={classes.Yline} style={{'height':'200px',left:'30%',top:'-200px'}}>{this.introduce[11]} </Link>
                        <Link to={`/TechIntroduce/${this.introduce[12]}`} className={classes.Yline} style={{'height':'100px',left:'45%',top:'-100px'}}>{this.introduce[12]}</Link>
                        <Link to={`/TechIntroduce/${this.introduce[13]}`} className={classes.Yline} style={{'padding-top':'100px',left:'60%',top:'0px'}}>{this.introduce[13]} </Link>
                        <Link to={`/TechIntroduce/${this.introduce[14]}`} className={classes.Yline} style={{'padding-top':'150px',left:'75%',top:'0px'}}>{this.introduce[14]} </Link>
                        <Link to={`/TechIntroduce/${this.introduce[15]}`} className={classes.Yline} style={{'padding-top':'200px',left:'90%',top:'0px'}}>{this.introduce[15]}</Link>
                    </Box> : null}
               </Typography>
               <Typography className={classes.font} onClick={this.clickGraphics}> 
                    {this.introduce[4]}
                    {this.state.changer[3] ? 
                    <Box className={classes.Xline}>
                        <Link to={`/TechIntroduce/${this.introduce[16]}`} className={classes.Yline} style={{'height':'125px',left:'30%',top:'-125px'}}>{this.introduce[16]} </Link>
                        <Link to={`/TechIntroduce/${this.introduce[17]}`} className={classes.Yline} style={{'height':'250px',left:'60%',top:'-250px'}}>{this.introduce[17]} </Link>
                        <Link to={`/TechIntroduce/${this.introduce[18]}`} className={classes.Yline} style={{'height':'375px',left:'90%',top:'-375px'}}>{this.introduce[18]}</Link>
                    </Box> : null}
               </Typography>
               <Typography className={classes.font} onClick={this.clickEnv}> 
                    {this.introduce[5]}
                    {this.state.changer[4] ? 
                    <Box className={classes.Xline}>
                        <Link to={`/TechIntroduce/${this.introduce[19]}`} className={classes.Yline} style={{'height':'200px',left:'30%',top:'-200px'}}>{this.introduce[19]} </Link>
                        <Link to={`/TechIntroduce/${this.introduce[20]}`} className={classes.Yline} style={{'height':'300px',left:'60%',top:'-300px'}}>{this.introduce[20]} </Link>
                        <Link to={`/TechIntroduce/${this.introduce[21]}`} className={classes.Yline} style={{'height':'400px',left:'90%',top:'-400px'}}>{this.introduce[21]} </Link>
                    </Box> : null}
               </Typography>

           </Box>

        );

    }

}

export default withStyles(styles)(TechStack);
