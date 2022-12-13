import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageurl,  newsUrl, author, date} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageurl?"https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221209223555.jpg":imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {date} </small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
