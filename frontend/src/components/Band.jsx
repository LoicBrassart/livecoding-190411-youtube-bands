import React from "react";

class Band extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>
          {this.props.bandData.title} (by {this.props.bandData.author})
        </p>
      </React.Fragment>
    );
  }
}
export default Band;
