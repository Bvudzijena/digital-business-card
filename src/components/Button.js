import React from "react"
import '../App.css'

export default function Navbar() {
    return (
        <div>
            <div className="text-headings">
                <h1>Darlington Bvudzijena</h1>
                <h2>Front End Developer</h2>
            </div>
            <button className="email-button">Email</button>
            <button className="linkedin-button">LinkedIn</button>
        </div>
    )
}