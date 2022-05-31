import React from "react"
import logo from "../images/darlington.jpeg"
import '../App.css'

export default function Navbar() {
    return (
              <div>
                <img className="navpicture" src={logo} alt={"Not sure"} />
              </div>
    )
}