import React from 'react'
import {Layout} from 'react-mdl'
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    root: {
      width: '30%',
      position:'relative',
      bottom:'-150px',
      left:'350px'
    }, 
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
function Projects(){
    
    
        const classes = useStyles();
        
        return(
            <div style={{height: '132%', position: 'relative' ,bottom:'65px'}}>
            <Layout style={{background: 'url(https://previews.123rf.com/images/shutter2u/shutter2u1802/shutter2u180200410/96330479-blue-technology-circle-and-computer-science-abstract-background-with-blue-and-binary-code-matrix-bus.jpg) center / cover'}}>
            <div className={classes.root}>
        <Fade>
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'20px', color:'green'}} className={classes.heading}><b><a className="a-1" href="https://github.com/FaisalQureshi200/ReactProject"  target="_blank"> React To-Do App</a></b></Typography>
         
        </ExpansionPanelSummary>
        <hr/>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
                <li><b>Front End App</b></li>
                <li><b>Add and Delete Todo</b>  </li>
                <li><b>Check Active Item and Complete Item</b></li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Fade>

      <br/><br/><br/>
      <Fade>
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'20px',color:'green'}} className={classes.heading}><b><a className="a-1" href="https://github.com/FaisalQureshi200/React-ToDoApp" target="_blank">React Calculator App</a></b></Typography>
         
        </ExpansionPanelSummary>
        <hr/>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
                <li><b>Front End App</b></li>
                <li><b>Perform Basic Mathmatics Operation</b>  </li>
              
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Fade>
      </div>
      
            </Layout>
            </div>
            
        )
    
}
export default Projects