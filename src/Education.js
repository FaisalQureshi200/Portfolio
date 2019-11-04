import React from 'react'
import { MDBCard, MDBCardBody, MDBCardText,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './index.css'
import Flip from 'react-reveal/Flip';
import {Layout} from 'react-mdl'
class Education extends React.Component{
    render(){
        return(
          
                  
            <div style={{height:'115%',bottom:'65px',position:'relative'}}>
                 
                <Layout style={{background: 'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80) center / cover' }}>
                <MDBContainer >
                    <br /><br />
                    <br/><br /><br />
                    <br/>
                    <h1 className="edu-head">EDUCATION</h1>
                    <br />
                   
                    <MDBRow>
                    <MDBCol className="column-2 px-2 mb-r">
                    <Flip top>
                    <MDBCard className="educard-1">

                        <MDBCardBody>
                        <a className="a" href="https://ssuet.edu.pk" target="_blank"> Sir Syed Unversity Of Engineering&Technology</a> 
                            
                        <p className="edu-text">  &emsp;  Karachi,Pakistan</p>
                        
                        <ul style={{className: "list-style-type:disc;"}}>
  <li className="list">BS(CS)</li>
  
</ul> 

                           

                            <MDBCardText className="text-1">

                                
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    </Flip>
                    </MDBCol>
                    </MDBRow>
                    
                    <br /><br /><br /><br />


                    
                    </MDBContainer>
                </Layout>
              
            
            </div>
           

        )
    }
}
export default Education