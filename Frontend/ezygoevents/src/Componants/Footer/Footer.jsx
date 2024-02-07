import React from 'react'
import './Footer.css'
import { FaPaperPlane} from "react-icons/fa";
const Footer = () => {
    const component = <>
        <footer className="w-100 py-4 flex-shrink-0 ">
        <div className="container py-4 ">
            <div className="row gy-4 gx-5 ml-auto">
                <div className="col-lg-3 col-md-4 ">
                    <h5 className="h1 text-black">EzyGoEvents</h5>
                    <p className="small text-muted">Find and book tickets for concerts, festivals, and more with ease.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                </div>
                <div className="col-lg-3 col-md-4">
                    <h5 className="text-black mb-3">Contact</h5>
                    <ul className="list-unstyled text-muted">
                        <li>999-999-9999</li>
                        <li>info@ezygoevents.com</li>
                    </ul>   
                </div>
                <div className="col-lg-3 col-md-4 ">
                    <h5 className="text-black mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/signup">Get started</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4">
                    <h5 className="text-black mb-3">Newsletter</h5>
                    <p className="small text-muted">Stay connected with latest updates</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Email" aria-label="Email" aria-describedby="button-addon2"/>
                            &nbsp;
                            <button className="btn btn-primary" id="button-addon2" type="button"><FaPaperPlane/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
    </>
  return component
}

export default Footer