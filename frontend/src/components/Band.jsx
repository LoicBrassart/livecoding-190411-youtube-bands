import React from "react";

class Band extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.bandName}</p>
      </React.Fragment>
    );
  }
}
export default Band;
