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

    udpdateItem = () => {
      const { options: { showSpinner = true } = {} } = this.props;
      if (showSpinner) {
        this.setState({ isLoad: true })
      };
      const { dataID } = this.props;
      this.props.getData(dataID)
        .then(data => {
          this.setState({
            data: data,
            isLoad: false,
          });
        })
        .catch(this.onError);
    };

    componentDidUpdate(prevProps) {
      if (prevProps.dataID !== this.props.dataID) {
        this.udpdateItem();
      }
    }

    componentDidMount() {
      this.udpdateItem();
      const { options: { iterate } = {} } = this.props;
      if (iterate) {
        const { delay = 5000 } = this.props.options;
        if (!Number.isFinite(delay)) {
          throw new Error(`Expected delay as number but has a ${typeof delay}`);
        }
        this.timerID = setInterval(() => this.udpdateItem(), delay);
      }
    }

    componentWillUnmount() {
      if (this.timerID) {
        clearInterval(this.timerID);
      }
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
