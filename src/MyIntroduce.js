import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
const styles = {
     root: {
         "position":"relative",
         "left":"10vw",
         "width":"80vw",
         "height":"80vh",
         "margin-top":"15vh",
         "background-color":"RGBA(172,62,222,0.42)",
         "border-top":"1px solid gray",
         "flex-direction":"row",
     },
     photo: {
         "margin-top":"100px",
         "margin-left":"11vw",
         "width" :"24vw",
         "height" : "24vw",
     },
     photoIntro: {
         "margin":"20px",
         "margin-left":"10vw",
         "color":"white",
         "font-size":"3vw",
     },
     font: {
         "font-size":"22px",
         "color":"white",
         "margin":"10px",
         "padding-bottom":"22px",
     },
};



class MyIntroduce extends Component{
    introduce = [
        "ByeongGyoo Kim",
        "My Introduce",
        "계명대학교 컴퓨터공학과 졸업",
        "계명대 그래픽스 연구실 근무(2018.07 ~ 2019.07)",
        "IJERT ISSN Vol 12 Issue 6 (June Issue) 저널 등재",
        "일본 어학 기숙사 JIKU 재사(2018.03 ~ 2019.07)",
        "JLPT N2 취득 (2020.01)",
        "일본 오사카 워킹홀리데이(2016.08~2017.01)",
        "그래픽스 / 영상처리 개발 中",
    ];

    render() {
        const { classes } = this.props;
        return(
            <Box className={classes.root} borderRadius={16}>
                <Box style={{"position":"absolute"}}>
                    <img src="/images/main.jpg" className={classes.photo}/>
                    <Typography className={classes.photoIntro}>{this.introduce[0]}</Typography>
                </Box>
                <Typography style={{"position":"absolute","left":"50%","margin-top":"40px"}}>
                    <Typography className={classes.font} style={{"font-size":"3.6vw"}}>{this.introduce[1]}</Typography>
                    <Typography className={classes.font}>{this.introduce[2]}</Typography>
                    <Typography className={classes.font}>{this.introduce[3]}</Typography>
                    <Typography className={classes.font}>{this.introduce[5]}</Typography>
                    <Typography className={classes.font}>{this.introduce[6]}</Typography>
                    <Typography className={classes.font}>{this.introduce[7]}</Typography>
                    <Typography className={classes.font}>{this.introduce[8]}</Typography>
                </Typography>
            </Box>
        );
    }

}
export default withStyles(styles)(MyIntroduce);
