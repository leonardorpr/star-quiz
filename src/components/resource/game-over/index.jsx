import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from 'reactstrap';

import { If, Persistence } from 'util';

const GameOver = ({
  className,
  open,
  toggle,
  additionalClassName,
  redirectTo,
  game,
}) => {
  const [form, setForm] = useState({ email: '', name: '', required: false });

  const redirectToRankingPage = () => {
    if (form.name.length <= 0) {
      setForm(prevForm => ({ ...prevForm, required: true }));
      return;
    }

    setForm(prevForm => ({ ...prevForm, required: false }));

    Persistence.setLocalStorage('ranking', {
      email: form.email,
      name: form.name,
      score: game.score,
    });

    toggle();
    redirectTo('/ranking');
  };

  const handleFieldChange = (key, value) => setForm(prevForm => ({ ...prevForm, [key]: value }));

  return (
    <div className={className}>
      <Modal
        isOpen={open}
        toggle={() => redirectToRankingPage()}
        className={additionalClassName}
        centered
      >
        <ModalHeader toggle={() => redirectToRankingPage()}>
          Game Over \o/
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <p
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bolder',
              }}
            >
              {`Score: ${game.score}`}
            </p>
          </div>
          <div>
            <div className="col-sm-12">
              <Input
                type="text"
                placeholder="Name"
                style={{ marginTop: 10 }}
                onChange={event => handleFieldChange('name', event.target.value)
                }
                value={form.name}
              />
            </div>
          </div>
          <div>
            <div className="col-sm-12">
              <Input
                type="email"
                placeholder="Email"
                style={{ marginTop: 10 }}
                onChange={event => handleFieldChange('email', event.target.value)
                }
                value={form.email}
              />
            </div>
            <If test={form.required}>
              <p
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  fontSize: 15,
                  color: 'red',
                }}
              >
                Name is required!
              </p>
            </If>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={() => redirectToRankingPage()}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ game }) => ({ game });

const mapDispatchToProps = dispatch => ({
  redirectTo: bindActionCreators(push, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameOver);
