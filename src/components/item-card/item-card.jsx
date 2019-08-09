import { Card } from '../hoc-helpers';
export default Card;

/*
class ItemCard extends Component {

  swapiService = new SwapiService();

  state = {
    itemID: null,
    isError: false,
  }

  onItemSwap = (itemID) => {
    this.setState({ itemID });
  }

  componentDidCatch() {
    this.setState({
      isError: true,
    });
  }

  render() {
    if (this.state.isError) {
      return <ErrorIndocator />
    }

    const { itemID } = this.state;

    const list = <PersonItemList onItemClick={this.onItemSwap} />
    const details = <PersonItemDetails itemID={itemID} />

    return <RowCol2
      left={list}
      right={details}
    />
  }

}
*/
