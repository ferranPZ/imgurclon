import React, { Fragment } from 'react'

//Assets
import './styles/home.css'

//images
import logo from '../images/logo.png'

export default class Home extends React.Component {






    render() {



        return (
            <Fragment>
                <html lang="en">
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Parallax</title>
                    </head>
                    <body>



                        <nav className="navbar fixed-top navbar-expand-lg   ">
                            <a className="navbar-brand" href="#">
                                <img className="logo" src={logo} alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">New Post <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>



                            </div>
                        </nav>


                        <div className="hero">
                            <div className="hero-title"></div>
                            <div className="cube"></div>
                            <div className="cube"></div>
                            <div className="cube"></div>
                            <div className="cube"></div>
                            <div className="cube"></div>
                            <div className="cube"></div>
                        </div>







                        <section className="parallax">
                            <div className="parallax-inner">
                                <h1>Parallax</h1>



                            </div>
                        </section>

                        <div className="margin">


                        </div>








                    </body>
                </html>
            </Fragment>


        );
    }
}

