import React, { Component } from 'react';
import ErrorIndocator from '../error-indicator';

const withNetwortkRequest = (Wrapped) => {
  return class extends Component {

    state = {
      data: null,
      isError: false,
    }

    componentDidCatch() {
      this.setState({
        isError: true,
      });
    }

    setData = (data) => {
      this.setState({ data });
    }

    render() {
      if (this.state.isError) {
        return <ErrorIndocator />
      }

      return <Wrapped {...this.props} data={this.state.data} setData={this.setData} />
    }
  }
}


export default withNetwortkRequest;
