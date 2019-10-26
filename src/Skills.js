import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdbreact';
import './index.css'
import Fade from 'react-reveal/Fade';


import { Layout } from 'react-mdl'
class Skills extends React.Component {
  render() {
    return (
      <div className="skill-body" style={{ height: '118%', position: 'relative', bottom: '105px', overflow: 'visible' }}>
        <Layout style={{ background: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80) center / cover' }}>

          <h1 className="banner">Skills</h1>
          <br />
          <Fade left>
            <MDBCard className="card" style={{ width: "50rem" }}>

              <MDBCardBody>
                <MDBCardTitle className="title">Front End</MDBCardTitle>
                <hr />


                <MDBCardImage src="https://clipart.info/images/ccovers/1499794874html5-js-css3-logo-png.png"
                  alt="html" className="html-image" />


                <img src="http://www.harlannet.com/Library/components/accordion-panels/images/bootstrap-icon.jpg"
                  alt="bootstrap" className="bootstrap-image" />
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  alt="react" className="react-image" />
                <img src="https://www.stickpng.com/assets/images/58480f66cef1014c0b5e4938.png" alt="material"
                  className="material-image" />
                <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="mdb"
                  className="mdb-image" />

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSpyERkywLoRkMfAQX-6OHEyskC89B2kePilUZe97VXXs4ZDg4" alt="mdb"
                  className="es6-image" />
              </MDBCardBody>
            </MDBCard>
          </Fade>

          <br /><br />
          <Fade left>
            <MDBCard className="card-1" style={{ width: "50rem" }}>

              <MDBCardBody>
                <MDBCardTitle className="title">Back End</MDBCardTitle>
                <hr />
                <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="node"
                  className="node-image" />
                <img src="https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png" alt="express"
                  className="express-image" />
                <img src="http://assets.stickpng.com/thumbs/58481021cef1014c0b5e494b.png" alt="mongo"
                  className="mongodb-image" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" alt="mongo"
                  className="firebase-image" />
                <br />
                <br />






              </MDBCardBody>
            </MDBCard>
          </Fade>

          <br /><br /><br/>
          <Fade left>      <MDBCard className="card-2" style={{ width: "50rem" }}>

            <MDBCardBody>
              <MDBCardTitle className="title">Cloud Native Computing</MDBCardTitle>
              <hr />
              <img src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png" alt="docker"
                className="docker-image" />
              <img src="https://miro.medium.com/max/3964/1*EBXc9eJ1YRFLtkNI_djaAw.png" alt="devops"
                className="devops-image" />
              <img src="https://alligatortek.com/wp-content/uploads/2016/12/six-shortcomings-agile-delivery-300x272.png" alt="agile"
                className="agile-image" />
              <br /><br />
              <img src="https://kubernetes.io/images/kubernetes-horizontal-color.png" alt="kubernetes"
                className="kubernetes-image" />






            </MDBCardBody>
          </MDBCard>
          </Fade>

          <br />
          <br />
          <Fade left>
            <MDBCard className="card-3" style={{ width: "50rem" }}>

              <MDBCardBody>
                <MDBCardTitle className="title">Other</MDBCardTitle>
                <hr />
                <img src="http://pngimg.com/uploads/github/github_PNG20.png" alt="github"
                  className="github-image" />
                <img src="https://static.techspot.com/images2/downloads/topdownload/2014/05/smartgithg.png" alt="smartgit"
                  className="smartgit-image" />
                <br />

              </MDBCardBody>
            </MDBCard>
          </Fade>
        </Layout>
      </div>
    )
  }
}
export default Skills