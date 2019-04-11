import React from "react";
import Band from "./Band";
import axios from "axios";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: [
        {
          id: 1,
          title: "Toto1",
          author: "Anon."
        },
        {
          id: 2,
          title: "Toto2",
          author: "Anon."
        }
      ]
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5050/bands").then(res => {
      //console.log(res.data);
      this.setState({
        bands: res.data
      });

      /*
      this.setState({
        bands: ["Raphael", "Leonardo", "Michelangelo", "Donatello"]
      });
      */
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.bands.map((band, i) => {
          return <Band key={i} bandData={band} />;
        })}
      </React.Fragment>
    );
  }
}
export default Gallery;
