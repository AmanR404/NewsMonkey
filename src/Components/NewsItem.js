import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,newsUrl,author,date, source} = this.props;
    return (
      <div>
       <div className="card">
       <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "90%", zIndex : "1"}}>{source}</span>
          <img src={!imageUrl?"https://staticg.sportskeeda.com/editor/2022/10/26a37-16656822148130-1920.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">by {!author?"Unknown":author} at {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
export default NewsItem
