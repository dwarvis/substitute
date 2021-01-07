import React from 'react'
import "./LoginBox.css"
import { Button, Input } from '@geist-ui/react'
import { Link } from "react-router-dom"

function LoginBox() {

    return (
        <div className="loginBox">
          <Input type="text" placeholder="Email" className="formItem"/>
          <Input.Password type="text" placeholder="Password" className="formItem"/>
          <Button type="success" className="formItem">
            <Link to="/" className="whiteLink">
              Login
            </Link>
          </Button>
        </div>
    )
}

export default LoginBox 
//lets component be used in other files