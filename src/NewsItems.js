import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsurl, author,source} =
      this.props;
    return (
      <div className="container-fluid my-1">
        <div className="card" style={{ width: "18rem", height: "25rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "10rem" }}
          />
          <div className="card-body" >
            <h5 className="card-title">{title}...</h5>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="blank" className="btn btn-sm btn-primary">
              {" "}
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {author}{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItems;
