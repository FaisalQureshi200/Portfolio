import React from 'react'
import {Layout} from 'react-mdl'
import{MDBIcon} from 'mdbreact'
import Fade from 'react-reveal/Fade';
class Blog extends React.Component{
    render(){
        return(
            <div style={{height: '112%', position: 'relative' , bottom:'65px'}}>
                <Layout style={{background: 'url(https://i.pinimg.com/originals/7c/67/61/7c6761efcd9300bbe5e3af0c352744a1.jpg) center / cover' }}>
               <ul>
                 <Fade> <p className="article-1"><MDBIcon fab icon="medium" size='2x' className="white-text pr-3" fixed/><a className="a-2" href="https://medium.com/@faisalqureshi690/8-must-know-javascript-array-methods-9c42ea5e2d2b">8 Must-Know JavaScript Array Methods</a></p></Fade>
                  <br/>
                  <Fade> <p className="article-1"><MDBIcon fab icon="medium" size='2x' className="white-text pr-3" fixed/><a className="a-2" href="https://medium.com/@faisalqureshi690/cloud-native-computing-b983f4e52cb9">Cloud Native Computing</a></p></Fade>
                   <br/>
                   <Fade><p className="article-1"><MDBIcon fab icon="medium" size='2x' className="white-text pr-3" fixed/><a className="a-2" href="https://medium.com/@faisalqureshi690/what-is-docker-docker-containers-images-7434350c216a">Docker For Beginner</a></p></Fade>
                   <br/>
                  <Fade> <p className="article-1"><MDBIcon fab icon="medium" size='2x' className="white-text pr-3" fixed/><a className="a-2" href="https://medium.com/@faisalqureshi690/scientific-calculator-on-rust-e86d26e6c8e">Scientific Calculator On Rust</a></p></Fade>

               </ul>

                </Layout>
             
            </div>
        )
    }
}
export default Blog