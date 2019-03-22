import styled from 'styled-components';
import colors from 'assets/colors';

export default c => styled(c)`
  .wrapper {
    height: 90vh;
    background-color: ${colors.background};
  }

  @media (max-width: 425px) {
    .wrapper {
      height: auto;
    }

    .clear-button {
      margin-bottom: 10px;
    }
  }

  .centralize-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .logo-body {
    height: 300px;
    width: 300px;
  }

  .letter-body {
    color: #000;
    font-weight: bolder;
    font-size: 50px;
  }

  .titles {
    font-weight: bolder;
  }
`;
