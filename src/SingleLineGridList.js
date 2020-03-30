import React ,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    margin:'1vw !important',
    //position: 'relative',
    //'padding-top':'10%',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    height: '500px',
    'max-width': '100%',
    
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(255,255,255,.1)',
        outline: '1px solid slategrey'
    },
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    
  },
}));


const tileData = [
   {
     img: '/my_home_page_source/background/b1.jpg',
     title: 'b1',
     author: 'author',
     link: 'http://www.naver.com',
   },
   { 
     img: '/my_home_page_source/background/b2.jpg',
     title: 'b2',
     author: 'author',
     link: './txtFiles/c.md',
   },
   {
     img: '/my_home_page_source/background/b3.jpg',
     title: 'b3',
     author: 'author'
   }
 ];

export default function SingleLineGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList} cols={2.5}>
        {props.tileData.map(tile => (
          <GridListTile key={tile.img}>
            <a href={tile.link} target='_blank'><img src={tile.img} alt={tile.title} height='500px' /></a>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
