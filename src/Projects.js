import React from 'react'
import {Layout} from 'react-mdl'
import Fade from 'react-reveal/Fade';
import {MDBCardBody,MDBCard,MDBCardTitle, MDBCardText, MDBCardFooter} from 'mdbreact'


function Projects(){
    
    
        
        
        return(
            <div style={{height: '132%', position: 'relative' ,bottom:'65px'}}>
            <Layout style={{background: 'url(https://previews.123rf.com/images/shutter2u/shutter2u1802/shutter2u180200410/96330479-blue-technology-circle-and-computer-science-abstract-background-with-blue-and-binary-code-matrix-bus.jpg) center / cover'}}>
            <Fade>
            <MDBCard className="project-card1">
              <MDBCardBody>
                <img className="project1-img" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react"/>
              
              <MDBCardTitle style={{position:'relative',left:'40px',bottom:'-10px'}}>React Todo App</MDBCardTitle>
              <MDBCardText><a className="project1-link" href="https://github.com/FaisalQureshi200/React-ToDoApp" target="_blank">View on GitHub</a></MDBCardText>
              <MDBCardFooter className="project1-footer"/>
              </MDBCardBody>
            </MDBCard>
       
        
      </Fade>

      <br/><br/><br/>
      <Fade>
      <MDBCard className="project-card2">
              <MDBCardBody>
                <img className="project2-img" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react1"/>
                <MDBCardTitle style={{position:'relative',left:'40px',bottom:'-10px'}}>React Calculator</MDBCardTitle>
              <MDBCardText><a className="project2-link" href="https://github.com/FaisalQureshi200/ReactProject" target="_blank">View on GitHub</a></MDBCardText>
              <MDBCardFooter className="project2-footer"/> 
              </MDBCardBody>
            </MDBCard>
      </Fade>
     
      
            </Layout>
            </div>
            
        )
    
}
export default Projects