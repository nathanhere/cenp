import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import Card from './Card';
import TopicButton from './TopicButton';

const styles = theme => ({
  root: {
    height: 50,
  },
  wrapper: {
    width: 1000 + theme.spacing.unit * 2,
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
  },
  // svg: {
  //   width: 100,
  //   height: 100,
  // },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});


function SimpleSlide(props){
  const [isOpen, setOpenState] = useState(false);
  const { classes } = props;

  useEffect(()=>{
    function handleClick(e){
      console.log(e);
      if (isOpen){
        setOpenState(false);
      } 
    }
    if (isOpen){
      document.addEventListener('click', handleClick, false);
      return function(){
        document.removeEventListener('click', handleClick, false); 
      }
    }
  }, [isOpen])

  function handleClick2(){
      if (isOpen) {
        setOpenState(false);
      } else {
        setOpenState(true);
      }
  }

  return (
    <div className="row justify-content-center" >
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className="row justify-content-center" >
            <TopicButton topicText={props.topicText} handleClick={handleClick2}/>
          </div>
          <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
            <Card paperclass={classes.paper} topicText={props.topicText} onClick={()=>setOpenState(false)} content={props.content} image={props.image} setIsOpen={setOpenState}/>
          </Slide>
        </div>
      </div>
    </div>
  );
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlide)