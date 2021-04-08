import React, { Component } from "react";
import { connect } from "react-redux";
import { resetGame } from "../actions/gameActions";

import Header from "./header";
import Footer from "./footer";

import {
  MainWrapper,
  SpacerDiv,
  DescriptionDisplay,
  ResetButton,
} from "../theme/styles";

class Finale extends Component {
  constructor() {
    super();
    this.handleResetGame = this.handleResetGame.bind(this);
  }

  handleResetGame() {
    this.props.resetGame();
  }


  render() {
    return (
      <MainWrapper>
        <Header />
        <SpacerDiv />
        <DescriptionDisplay>The village killed off: {this.props.killed["vote"]}</DescriptionDisplay>
        <DescriptionDisplay>{this.props.killed["hunter"]}</DescriptionDisplay>
        <ResetButton onClick={this.handleResetGame}> Reset </ResetButton>
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
    killed: state.killed,
});

const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => dispatch(resetGame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Finale);