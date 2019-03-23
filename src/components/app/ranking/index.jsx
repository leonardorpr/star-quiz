import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'components/resource';
import { Persistence } from 'util';

import styles from './styles';

const Ranking = ({ className }) => {
  const renderRanking = () => {
    const players = Persistence.getLocalStorage('ranking');

    const render = players
      && players
        .sort(
          (currentPlayer, nextPlayer) => currentPlayer.score - nextPlayer.score,
        )
        .map((player, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{player.name}</td>
            <td>{player.email}</td>
            <td>{player.score}</td>
          </tr>
        ));

    return render;
  };

  return (
    <div className={className}>
      <div className="wrapper">
        <div className="centralize-content">
          <div className="container mt-2 mb-4">
            <div>
              <h1 className="titles">Ranking</h1>
              <hr className="my-4 titles" />
            </div>

            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>{renderRanking()}</tbody>
            </Table>
          </div>

          <Button color="warning" label="Start Game" route="game" />
        </div>
      </div>
    </div>
  );
};

export default styles(Ranking);
