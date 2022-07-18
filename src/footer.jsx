import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section>
                <footer className="text-center text-white" style={{backgroundColor:"wheat"}}>

                    <div className="text-center p-3 text-dark" >
                        © 2022 Copyright&nbsp;
                        <NavLink className="text-dark text-decoration-none" to="/">
                            Fashion Shop
                        </NavLink>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer;