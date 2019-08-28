import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const WithNetwork = (Wrapped) => {
  return class extends Component {

    state = {
      isLoad: false,
      isError: false,
      data: undefined,
    }

    onError = (error) => {
      window.console.log(error);
      this.setState({
        isLoad: false,
        isError: true,
      });
    }

    udpdateitem = () => {
      const { dataID } = this.props;
      if (!Number.isFinite(parseInt(dataID))) {
        return;
      };

      this.setState({ isLoad: true });
      this.props.getData(dataID)
        .then(data => {
          this.setState({
            data: { ...data },
            isLoad: false,
          });
        })
        .catch(this.onError);
    };

    componentDidUpdate(prevProps) {
      if (prevProps.dataID !== this.props.dataID) {
        this.udpdateitem();
      }
    }

    componentDidMount() {
      this.udpdateitem();
    }

    render() {
      const { isLoad, isError } = this.state;

      if (isLoad) {
        return <Spinner />
      }

      if (isError) {
        return <ErrorIndicator />
      }

      const { data } = this.state;
      const {dataID, ...props} = this.props;

      return <Wrapped data={data} {...props} />

    }

  }
}

export default WithNetwork;
