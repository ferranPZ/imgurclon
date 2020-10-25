import React, { Fragment } from 'react'
import axios from 'axios'

//Components
import Post from '../components/Post'

//Assets
import './styles/home.css'

//images
import logo from '../images/logo.png'



export default class Home extends React.Component {

    state = {
        data: undefined
    }


    fetchData = async () => {
        console.log("fetching Data...");
        try {
            let posts = await axios({
                method: 'GET',
                url: 'http://192.168.0.7:3000/api/posts/',

            })
            this.setState({
                data: posts.data
            })
            console.log('data:', this.state.data)
        } catch (error) {
            console.error(error)
        }

    }

    componentDidMount() {
        this.fetchData();
    }

    render() {



        return (
            <Fragment>




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

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

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


                <div className="margin">
                    <div className="container" >
                        <div className="row">




                            {this.state.data && this.state.data.reverse().map((post) => {
                                return (

                                    <Post key={post.id} data={post} />


                                )
                            })}






                        </div>
                    </div>
                </div>







            </Fragment >


        );
    }
}



// <section className="parallax">
// <div className="parallax-inner">
//     <h1>Parallax</h1>
// </div>
// </section>
