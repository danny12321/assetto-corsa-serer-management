import React, { Component } from "react";
import Paper from "../../components/Paper";
import MyContext from '../../MyContext';

class Track extends Component {

  render() {
    const { tracks } = this.props.context;

    return (
      <div className="track grid">
        {tracks.map(track => {
          return (
            <div key={track.path} className="grid__item">
              <Paper title={track.name}>
                <div className="track__circuit">
                  <div>
                    <img
                      src={`/api/track/preview?path=${track.path}`}
                      alt="preview"
                      width="400px"
                      onError={e =>
                        (e.target.src =
                          "https://cheaphotels4uk.com/wp-content/uploads/2017/12/race-wide.jpg")
                      }
                    />

                    <img
                      style={{
                        position: "absolute",
                        bottom: 5,
                        right: 5,
                        background: "rgba(0,0,0,.4)"
                      }}
                      src={`/api/track/map?path=${track.path}`}
                      alt="map"
                      width="70px"
                      onError={e => (e.target.style.display = "none")}
                    />
                  </div>
                </div>
              </Paper>
            </div>
          );
        })}
      </div>
    );
  }
}

export default props => (
  <MyContext.Consumer>
    {context => <Track {...props} context={context} />}
  </MyContext.Consumer>
)