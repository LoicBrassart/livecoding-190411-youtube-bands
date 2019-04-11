import React from "react";
import Band from "./Band";

class Gallery extends React.Component {
  render() {
    return (
      <React.Fragment>
        Gallery
        <Band />
        <Band />
      </React.Fragment>
    );
  }
}
export default Gallery;
