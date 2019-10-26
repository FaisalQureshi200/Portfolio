import React from 'react'
import './index.css'
import { Layout } from 'react-mdl'
import Fade from 'react-reveal/Fade';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

class Experience extends React.Component {
    render() {
        return (

            <div className="exp-body" style={{ height: '110%',bottom:'65px',position:'relative' , overflow:'visible'}}>
                <Layout style={{background: 'url(http://blogs.biomedcentral.com/on-physicalsciences/wp-content/uploads/sites/14/2019/02/data-1-620x342.jpg) center / cover' }}>
                    <br /><br />
                    <h1 className="banner-1">Experience</h1>
                    <br />
                    <Fade bottom>
                    <MDBCard className="expcard-1">

                        <MDBCardBody>
                            <MDBCardTitle className="exp-1">Sudoware  <p className="p1">Internee</p></MDBCardTitle>


                            <hr />

                            <MDBCardText className="text-1">

                                &emsp;  •  Worked on the frontend technologies in a software house called SUDOWARE. I work  on a single-
                                           page apps  and is served by a HTML, CSS, BootStrap4, JavaScript.
                                          <br /><br />
                                &emsp;  • Make some basic RESTful API using Node.js, MONGODB like Sign In and Sign Up and other API.
                                <div className="card-footer">

                                    <p>Dec 2018-July 2019 (8 months)</p>

                                </div>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    </Fade>
                    <br /><br /><br /><br />

                    <Fade bottom>
                    <MDBCard className="expcard-2">

                        <MDBCardBody>
                            <MDBCardTitle className="exp-2">PanaCloud<p className="p1">Internee</p></MDBCardTitle>
                            <hr />
                            <MDBCardText className="text-1">
                          &emsp;  • Worked on a College Recruitment System , which is used by college to post a job using student profile and is served by a Reactjs, Material UI, Firebase.
      
                          <div className="card-footer1">

<p>July 2018-August 2018 (1 months)</p>

</div> 
          </MDBCardText>

                        </MDBCardBody>
                    </MDBCard>
                    </Fade>
                    <br />
                    <br />
                    <Fade bottom>
                    <MDBCard className="expcard-3">

                        <MDBCardBody>
                            <MDBCardTitle className="exp-3">Al-Ibtekaar<p className="p1">Internee</p></MDBCardTitle>
                            <hr />
                            <MDBCardText  className="text-1">
                           
        &emsp; •  Worked on basic assignment using JavaScript, Es6, Node.js, Express.js, Reactjs and MongoDB make to do apps ,searching apps and API using Reactjs and Node.js. 
          </MDBCardText>
          <div className="card-footer2">

<p>July 2017-July 2018 (1 year)</p>

</div> 
                        </MDBCardBody>
                    </MDBCard>
                    </Fade>
                </Layout>
            </div>


        )
    }
}
export default Experience