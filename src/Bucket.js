import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
const styles = {
     root: {
         "background-color":"RGBA(0,0,0,0.6)",
         "border-top":"1px solid skyblue",
     },
     font: {
         "margin":"3vw",
         "font-size":"20px",
         "color":"white",
         "padding-bottom":"20px",
         "border-bottom":"1px solid skyblue",

     },
};



class Bucket extends Component{
    introduce = [
        "저의 삶의 모토가 된 단어입니다. 내 삶이 일년, 하루, 한시간 남지 않았을 때 후회하지 않는길인가를 되뇌이게끔 합니다.",
        "일본 워킹홀리데이 생활을 처음 해보며 휴대폰마저 로밍이었을 때, 집 근처에 있는 스타벅스에 300엔 커피를 한잔 마키며, 노트북을 켜 생활정보를 뒤져나갔습니다. 일본에서의 첫 알바는 마음처럼 잘 되지 않았습니다. 아르바이트 면접마저 10번을 내리 떨어졌습니다.",
        "자신감은 떨어졌고, 한달차 한국으로 귀국할까 고민도 하였지만, 만약 지금 이순간에 최선을 다했고, 후회하지 않았나 고민하였을 때 당당히 말할 수 있을까 생각했습니다. 결국 버티고 버티며, 일자리를 구하고, 자리를 잡아 제가 일본에 와서 적었던 버킷리스트를 이룰수 있었습니다.",
        "한국에 돌아가며 다짐 했던 것은 남들에게 보여주기 위한 스펙이 아닌, 열정을 뒷바쳐줄 능력을 기르는게 먼저라 생각하고, 실제 학업 공부도 성적이 아닌 개인 기술을 먼저라 생각하며, 갈고 닦았습니다.",
    ];

    render() {
        const { classes } = this.props;
        return(
            <Box className={classes.root}>
                <Typography className={classes.font} style={{"margin-top":"7vh"}}>{this.introduce[0]}</Typography>
                <Typography className={classes.font}>{this.introduce[1]}</Typography>
                <Typography className={classes.font}>{this.introduce[2]}</Typography>
                <Typography className={classes.font}>{this.introduce[3]}</Typography>
            </Box>
        );
    }

}
export default withStyles(styles)(Bucket);
