import React from 'react'
import Home from './Home'
import Aboutme from './Aboutme'
import Education from './Education'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'
import Skills from './Skills'
import Blog from './Blog'
import {Switch,Route} from 'react-router-dom'

const Main=()=>(
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/aboutme' component={Aboutme}/>
    <Route exact path='/skills' component={Skills}/>
    <Route exact path='/experience' component={Experience}/>
    <Route exact path='/projects' component={Projects}/>
    <Route exact path='/education' component={Education}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/blog' component={Blog}/>
</Switch>
)
export default Main


