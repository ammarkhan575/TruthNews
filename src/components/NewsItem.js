import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
      let {title,description,imageUrl} = this.props;
    return (
      <div>
        <div  className="card" style={{width: "18rem"}}>
          <img src="https://www.reuters.com/resizer/Bhuzz6I2HhyMUK6Zp6-ga-wpRSU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AMEH5LXK6NKG3CHSCMJDHD6UMQ.jpg"  className="card-img-top" alt="..." />
          <div  className="card-body">
            <h5  className="card-title">{title}</h5>
            <p  className="card-text">
              {description}
            </p>
            <a href="#"  className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
