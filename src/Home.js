import React from 'react'
import Fade from  'react-reveal/Fade';
import {Layout,Content} from 'react-mdl'

class Home extends React.Component{
    render(){
        return(
            
            <div style={{height: '112%', position: 'relative' , bottom:'65px'}}>
    <Layout  style={{background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl1LTEMSV2mlkEXg0CfiClFyb5H8kwCWDl42dUyxRDap25M2nR) center / cover' }}></Layout>
   <Content>
    <div className="page-content" />
    <Fade bottom>  
    <h1  transparent  style={{color: 'white',fontSize:'50px'}}>
                  <br/>
                  <br/>
                  <br/>
                  &nbsp; <u>Faisal Qureshi</u><br/><br/>
              &nbsp; 
                 &nbsp; &nbsp; <u>Web  Developer</u> <br/>
                 &nbsp; &nbsp; &nbsp;

                  </h1></Fade>
                
                    </Content>

    </div>
    
        )
    }
}
export default Home