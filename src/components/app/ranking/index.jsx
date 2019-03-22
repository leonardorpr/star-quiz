import React from 'react';
import { Button, Table } from 'reactstrap';
import { Header } from 'components/resource';

import styles from './styles';

const Ranking = ({ className }) => (
  <div className={className}>
    <div className="wrapper">
      <Header />
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
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>10</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Button className="button-body" color="warning">
          Start Game
        </Button>
      </div>
    </div>
  </div>
);

export default styles(Ranking);
