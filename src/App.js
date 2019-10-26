import React from 'react';
import {Navigation,Layout,Header,Drawer,Content} from 'react-mdl'
import {Link} from 'react-router-dom'
import Main from './main'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import{MDBIcon} from 'mdbreact'
class App extends React.Component {

    render() {
        return (
            
            <div className="demo-big-content">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
     
                <Layout>
                    <Header transparent    scroll>
                        <Navigation style={{position:'relative',left:'250px'}}>
                            <Link to="/">Home</Link>
                            <Link to="/aboutme">AboutMe</Link>
                            <Link to="/skills">Skills</Link>
                            <Link to="/experience">Experience</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/education">Education</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/blog">Blog</Link>
                        </Navigation>

                    </Header>


                    <Drawer style={{backgroundColor:"#212f3d"}}>

                        <Navigation>
                            <Link style={{color:"#ffff"}} to="/"><MDBIcon icon="home" className="red-text pr-3"  fixed />&ensp;Home</Link>
                            <Link style={{color:"#ffff"}} to="/aboutme"> <MDBIcon icon="user" className="green-text pr-3"  fixed /> &ensp;AboutMe</Link> 
                            <Link style={{color:"#ffff"}} to="/skills"><MDBIcon icon="signal" className="cyan-text pr-3"  fixed />&emsp;Skills</Link>
                            <Link style={{color:"#ffff"}} to="/experience"><MDBIcon icon="chart-line" className="red-text pr-3"  fixed />&emsp;Experience </Link>
                            <Link style={{color:"#ffff"}} to="/projects"><MDBIcon icon="folder" className="blue-text pr-3" fixed />&emsp;Projects</Link>
                            <Link style={{color:"#ffff"}} to="/education"><MDBIcon icon="graduation-cap" className="amber-text pr-3" fixed />&emsp; Education</Link>
                            <Link style={{color:"#ffff"}} to="/contact"><MDBIcon icon="envelope" className="brown-text pr-3" fixed />&emsp;Contact</Link>
                            <Link style={{color:"#ffff"}} to="/blog"><MDBIcon icon="newspaper" className="indigo-text pr-3" fixed />&emsp;Blog</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                         
                        <Main/>
                    </Content>
                </Layout>
               
            </div>
        )
    }

}
export default App