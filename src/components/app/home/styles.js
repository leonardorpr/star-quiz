import styled from 'styled-components';

export default c => styled(c)`
  .wrapper {
    height: 100vh;
  }

  .centralize-content {
    height: 90%;
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

  .button-body {
    width: 150px;
    height: 50px;
    text-transform: uppercase;
  }
`;