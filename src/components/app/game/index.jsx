import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CreatorsGame } from 'core/store/ducks/game';

import { Button } from 'reactstrap';
import { CountDown, Card } from 'components/resource';
import styles from './styles';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: props.game,
    };
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.game) {
      this.setState({ cards: nextProps.game });
    }
  }

  renderCharacters() {
    const { cards } = this.state;

    if (cards.characters) {
      const characters = cards.characters.map((character, index) => (
        <div key={index} className="col-sm-12 col-md-4">
          <Card image={character.image} informations={character} />
        </div>
      ));

      return characters;
    }

    return null;
  }

  render() {
    const { cards } = this.state;
    const { className, loadMore } = this.props;

    return (
      <div className={className}>
        <CountDown />
        <div className="container">
          <div className="row">{this.renderCharacters()}</div>
          <Button
            color="warning"
            size="lg"
            block
            className="button-load-more"
            onClick={() => loadMore(cards.nextPage)}
          >
            Load more
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({ game });

const mapDispatchToProps = dispatch => ({
  fetchCharacters: bindActionCreators(CreatorsGame.fetchCharacters, dispatch),
  loadMore: bindActionCreators(CreatorsGame.loadMore, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styles(Game));
