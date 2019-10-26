import React from 'react'
import {Layout,Content} from 'react-mdl'
import Fade from  'react-reveal/Fade';
import './index.css'


class Aboutme extends React.Component{
    render(){
        return(
            <div style={{height: '112%', position: 'relative' , bottom:'65px'}}>
             <Layout style={{background:'url(https://static.makeuseof.com/wp-content/uploads/2018/11/dark-wallpapers-670x335.jpg) center / cover' , opacity:'10'}}
           alt="">
               <Content>
               <div className="page-content" />
             <Fade bottom> <p className='text-2'>I am a Web Developer (currently hacking with JavaScript on web frontend stuff). <br/><br/>
               &emsp; I love my craft and I love building UIs that look pretty, perform well, and (most importantly) with an easy-to-read source code.<br/><br/>
               &emsp; &emsp; What I love the most about React is how simple and predictable writing UIs became.</p></Fade> 
               </Content>
                  </Layout>
                 
            </div>
        )
    }
}
export default Aboutme

