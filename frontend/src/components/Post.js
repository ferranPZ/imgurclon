import React, { Component } from 'react'
import axios from 'axios'

import './styles/post.css'
export default class Post extends Component {

    state = {
        src: this.props.data.images[0] ? this.props.data.images[0].description : false,
        errored: false
    }

    onError = () => {
        if (!this.state.errored) {
            this.setState({
                src: "fail.jpg",
                errored: true,
            });
        }
    }



    render() {
        return (
            <React.Fragment>
                <h1>  </h1>
                <div className="col-6 col-md-3 mb-4">
                    <div className="card text-white bg-own mb-3">

                        <img className="card-img-top" src={"http://192.168.0.7:3000/static/images/" + this.state.src} onError={this.onError} alt="CardPic" />





                        <div className="card-body">
                            <h5 className="card-title title">{this.props.data.title}</h5>
                            {/* <p className="card-text">{this.props.data.description}</p> */}
                            <p className="card-text"><small className="text-muted">Creado por: {this.props.data.autorId}</small></p>
                            {/* <p className="card-text"><small className="text-muted">el : {this.props.data.createdAt}</small></p> */}

                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
