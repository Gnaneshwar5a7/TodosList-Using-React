import React from 'react'

const Footer = () => {
  let mystyle = {
    listStyle: 'none',
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 10px',
    justifyContent: 'center'
  }
  return (
    <footer className='bg-dark text-light py-3'>
      <p className='text-center px-5'>DEVELOPER PROFILES</p>
      <ul className='text-center' style={mystyle}>
        <li><a style={mystyle} href="https://gnaneshwarsindheprofileportfolio.000webhostapp.com">Portfolio</a></li>
        <li><a style={mystyle} href="https://www.linkedin.com/in/gnaneshwar-sindhe-4b3166226">LinckedIn</a></li>
        <li><a style={mystyle} href="https://www.facebook.com/sindhe.gnaneshwar.5">Facebook</a></li>
        <li><a style={mystyle} href="https://www.instgram.com/sindhe.gnaneshwar">Instagram</a></li>
      </ul>
      <p className='text-center'>
        Copyright &copy; Mytodoslist.com
      </p>
    </footer>
  )
}

export default Footer
