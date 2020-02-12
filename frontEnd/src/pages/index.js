import styled from "styled-components";
import { Icon, Button } from "antd";

const StyledHome = styled.div`
  .background {
    position: fixed;
    top: 0px;
    left: 0px;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1000;
    overflow: hidden;
    opacity: 0.8;
  }
  .content {
    width: 100%;
    height: 100%;
    opacity: 0.68;
    position: absolute;
    padding: 2rem 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .title {
      font-weight: bold;
      font-size: 6rem;
      position: relative;
      top: 3rem;
    }
    .subtitle {
      font-weight: bold;
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      white-space: pre-line;

      div {
        display: inline-block;
      }
    }
    .icons {
      margin-top: 2rem;
      width: 28%;
      display: flex;
      justify-content: space-evenly;
      font-size: 7rem;
    }
    .demo-button-wrapper {
      button {
        background-color: #7f8c8d;
        opacity: 0.7;
        border: 0.5px solid #bdc3c7;
        font-weight: bold;
        font-size: 2rem;
        width: 32rem;
        height: 5rem;
        color: white;
      }
    }
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <video
        className="background"
        preload="auto"
        autoPlay={true}
        loop="loop"
        muted="muted"
        volumn={0}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="title"> Data Pipelining </h1>
        <div className="subtitle">
          <div> Give you high resolution images </div>
          <div> And </div>
          <span> Joyining Your Photo Life </span>
        </div>
        <div className="icons">
          <Icon type="file-jpg" />
          <Icon type="arrow-right" />
          <Icon type="mail" />
        </div>
        <div className="demo-button-wrapper">
          <Button shape="round" size="large">
            {" "}
            Request Converting Image
          </Button>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
