import React, { Component } from "react";
import Paper from "../../components/Paper";
import MyContext from '../../MyContext';
import Input from '../../components/Input'

const Store = window.require('electron-store');
const store = new Store();

class Track extends Component {
  state = {
    search: ''
  }

  render() {
    const { tracks } = this.props.context;
    const { search } = this.state



    return (
      <div className="route track">

        <Input
          type="text"
          label="Search"
          value={search}
          onChange={e => this.setState({ search: e.target.value })}
        />

        <div className="flex">
          {tracks.map(track => {
            if (!track.name.includes(this.state.search)) return null
            const isSelected = this.props.context.selectedTrack === track.name;

            return (
              <div key={track.path} className="grid__item" onClick={() => this.props.context.setSelectedTrack(track)}>
                <Paper title={track.name} isSelected={isSelected}>
                  <div className="track__circuit">
                    <div>
                      <img
                        src={`${store.get('ac_path')}/content//tracks/${track}/preview.png`}
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
                        src={`${store.get('ac_path')}/content//tracks/${track}/outline.png`}
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

      </div>
    );
  }
}

export default props => (
  <MyContext.Consumer>
    {context => <Track {...props} context={context} />}
  </MyContext.Consumer>
)