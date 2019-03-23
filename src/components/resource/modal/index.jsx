import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CreatorsGame } from 'core/store/ducks/game';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button,
} from 'reactstrap';
import styles from './styles';

class GameModal extends Component {
  async componentWillReceiveProps(prevProps) {
    const { open: prevOpen } = prevProps;
    const { open, resetDetails } = this.props;

    if (prevOpen !== open && prevOpen) {
      resetDetails();

      this.getFilms();
      this.getSpecies();
      this.getVehicles();
    }
  }

  getVehicles() {
    const { informations, getDetails } = this.props;

    informations.vehicles.forEach(vehicle => getDetails(vehicle, 'vehicles'));
  }

  getSpecies() {
    const { informations, getDetails } = this.props;

    informations.species.forEach(specie => getDetails(specie, 'species'));
  }

  getFilms() {
    const { informations, getDetails } = this.props;

    informations.films.forEach(film => getDetails(film, 'films'));
  }

  renderModalBody() {
    const { informations, className, game } = this.props;
    const { details } = game;
    const { height, hair_color: hair } = informations;

    const characterInformations = {
      specie: details.species,
      height,
      hair,
      movies: details.films,
      vehicles: details.vehicles,
    };

    const characterDetails = Object.entries(characterInformations);

    const render = characterDetails.map((detail, index) => (
      <div key={index} className={className}>
        <span className="detail">{detail[0]}: </span>
        <span>{detail[1]}</span>
      </div>
    ));

    return render;
  }

  render() {
    const {
      className, open, toggle, additionalClassName, image,
    } = this.props;

    return (
      <div className={className}>
        <Modal
          isOpen={open}
          toggle={toggle}
          className={additionalClassName}
          centered
        >
          <ModalHeader toggle={toggle}>Character Detail</ModalHeader>
          <ModalBody>
            <div>
              <img
                src={image}
                alt="Character Images"
                style={{ height: 200, width: '100%' }}
              />
            </div>
            <div>{this.renderModalBody()}</div>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({ game });

const mapDispatchToProps = dispatch => ({
  getDetails: bindActionCreators(CreatorsGame.fetchDetails, dispatch),
  resetDetails: bindActionCreators(CreatorsGame.resetDetails, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styles(GameModal));
