import React from 'react'
import {Layout} from 'react-mdl'
import{MDBIcon} from 'mdbreact'
import Fade from 'react-reveal/Fade';
class Contact extends React.Component{
    render(){
        return(
            <div style={{height: '118%', position: 'relative' , bottom:'105px', overflow:'visible'}}>
                <Layout style={{background: 'url(https://media.istockphoto.com/photos/web-contact-us-icons-on-cubes-picture-id879441788?k=6&m=879441788&s=612x612&w=0&h=gAHNAkakCHK-YtAGs6lGTNZnCSSEQjOeilBYmhj6mUQ=) center / cover'}}>
                <ul>
                   <Fade> <p className="list-2"><MDBIcon icon="envelope" size='2x' className="white-text pr-3" fixed/> <a className="a-1" href ="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZfSDQXQbmwNHPxQcMvPCCgszqmddMWKLsZnMvzzrLPSHpWkcplQhNcFqlCCJBnrBRbGRg" target="_blank">faisalqureshi690@gmail.com</a> </p></Fade>
                    <br/>
                    <Fade><p className="list-2"><MDBIcon fab icon="github" size='2x' className="white-text pr-3" fixed/> <a className="a-1" href ="https://github.com/FaisalQureshi200" target="_blank">github.com/FaisalQureshi200</a> </p></Fade> 
                    <br/>
                    <Fade>  <p className="list-2"><MDBIcon fab icon="linkedin" size='2x' className="white-text pr-3" fixed/> <a className="a-1" href ="https://github.com/FaisalQureshi200" target="_blank">github.com/FaisalQureshi200</a> </p></Fade>
               
                </ul>
                
                </Layout>
             
            </div>
        )
    }
}
export default Contact