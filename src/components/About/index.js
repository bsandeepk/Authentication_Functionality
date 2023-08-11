// Write your JS code here
import {React,Component} from 'react'
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
    <>
        <Header />
            <div className="about">
                <h1>About Route</h1>
                <LogoutButton />
            </div>
    </>

)
export default About
