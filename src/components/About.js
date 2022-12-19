import React from 'react'

const About = () => {
    let myStyle = {
        minHeight: "100vh",
        padding: '5px'
    }
    let s={
        paddingLeft:'20px',
        paddingRight:'10px'
    }
    return (
        <div className="m-3" style={myStyle}>
            <h2 style={s}>Hello!</h2>
            <p className='py-3' style={s}>My name is Gnaneshwar Sindhe, currently studing Computer Science and Engineering of B.Tech in CMR Institute of Technology, Hyderabad. I have developed this website for learning and exploring the web development technologies. I used ReactJs frontend development tool and the pre-built CSS and JavaScript source codes from Bootstrap for doing this. If you want know about me more please do visit my portfolio website. </p>
        </div>
    )
}

export default About
