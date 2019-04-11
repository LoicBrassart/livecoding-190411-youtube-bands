import React from "react";
import Band from "./Band";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: ["toto1", "toto2"]
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.bands.map(band => {
          return <Band bandName={band} />;
        })}
      </React.Fragment>
    );
  }
}
export default Gallery;
