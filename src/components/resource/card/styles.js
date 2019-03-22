import styled from 'styled-components';

export default c => styled(c)`
  .game-card {
    padding-top: 15px;
  }

  .button-see-more {
    background-color: #3a3a3c;
  }

  .button-who-am-i {
    background-color: #73513e;
  }

  .button-who-am-i:hover {
    background-color: #604334;
  }

  .action-icons {
    padding-top: 7px;
    cursor: pointer;
  }

  .guess-field {
    margin-bottom: 5px;
  }
`;
