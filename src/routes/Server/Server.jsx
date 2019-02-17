import React, { Component } from 'react'
import Paper from '../../components/Paper';
import MyContext from '../../MyContext';

const remote = window.require('electron').remote
const mainProcess = remote.require('./electron')

class Server extends Component {
    startServer() {
        this.props.context.setServerOn(true);
        mainProcess.startServer();
    }

    stopServer() {
        this.props.context.setServerOn(false);
        mainProcess.stopServer();
    }

    render() {
        return (
            <Paper title="Server">
                {this.props.context.serverOn ?
                    <div onClick={() => this.stopServer()}>
                        Stop server
                </div>
                    :
                    <div onClick={() => this.startServer()}>
                        Start server
                </div>
                }

                <div>

                    {this.props.context.serverData.map((data, key) => {
                        return (
                            <div key={key}>
                                {data.data}
                            </div>
                        )
                    })}

                </div>
            </Paper>
        )
    }
}

export default props => (
    <MyContext.Consumer>
        {context => <Server {...props} context={context} />}
    </MyContext.Consumer>
)