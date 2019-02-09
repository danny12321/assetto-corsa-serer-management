import React, { Component } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import Paper from "../../components/Paper";

export default class Track extends Component {
  state = {
    tracks: null
  };

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks() {
    axios.post("/api/track/fetchAll").then(res => {
      this.setState({ tracks: res.data });
    });
  }

  render() {
    if (!this.state.tracks) return <Loading />;

    return (
      <div className="track grid">
        {this.state.tracks.map(track => {
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
