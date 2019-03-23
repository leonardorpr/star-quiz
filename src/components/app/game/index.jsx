import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CreatorsGame } from 'core/store/ducks/game';

import { Button } from 'reactstrap';
import { CountDown, Card } from 'components/resource';
import styles from './styles';

class Game extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  renderCharacters() {
    const { game } = this.props;

    if (game.characters) {
      const characters = game.characters.map((character, index) => (
        <div key={index} className="col-sm-12 col-md-4">
          <Card image={character.image} informations={character} />
        </div>
      ));

      return characters;
    }

    return null;
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <CountDown />
        <div className="container">
          <div className="row">{this.renderCharacters()}</div>
          <Button color="warning" size="lg" block className="button-load-more">
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styles(Game));
