// Import necessary components
import React, { Component } from "react";
import MainContainer from "./mainContainer.js";
import Nav from "./nav.js";
import Banner from "./banner.js";
import PictureList from "./pictureList.json";
import MainPictureContainer from "./mainPictureContainer.js";
import OnePictureContainer from "./onePictureContainer.js";
import Footer from "./footer.js";

// states
class MainApp extends Component {
  state = {
    navMessage: "Click an image to begin!",
    score: 0,
    topScore: 0,
    PictureList: PictureList.sort(() => {
      return Math.random() - 0.5;
    }),
    clickedPictures: [],
    shakePictures: ""
  };

  // Function handles state
  stateHandle = name => {
    let currentScore = this.state.score;
    let topScore = this.state.topScore;
    let clickedList = this.state.clickedPictures;

    // Top score 12 is maximum
    if (topScore < 12) {
      // User clicked previously un-clicked picture
      if (!clickedList.includes(name)) {
        clickedList.push(name);
        // Check if it was the last un-clicked picture or not
        if (currentScore !== 11) {
          this.setState({
            navMessage: "You guessed correctly!"
          });
        } else {
          this.setState({
            navMessage: "You guessed perfectly!"
          });
        }
        // Check if it was record breaking or not
        if (currentScore >= topScore) {
          this.setState({
            score: currentScore + 1,
            topScore: topScore + 1,
            shakePictures: ""
          });
        } else {
          this.setState({
            score: currentScore + 1,
            shakePictures: ""
          });
        }
      } else {
        // User clicked previously clicked picture again
        this.setState({
          score: 0,
          navMessage: "You guessed incorrectly!",
          clickedPictures: [],
          shakePictures: "shake"
        });
      }
    } else {
      // If user got perfect score, the next click will reset the game
      this.setState({
        score: 0,
        topScore: 0,
        navMessage: "Click an image to begin!",
        clickedPictures: [],
        shakePictures: ""
      });
    }
    // Shuffling the picture list array
    this.setState({
      PictureList: this.state.PictureList.sort(() => {
        return Math.random() - 0.5;
      })
    });
  };

  render() {
    React.createElement("div");
    return (
      <MainContainer>
        <Nav
          navMessage={this.state.navMessage}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Banner />
        <MainPictureContainer shakePictures={this.state.shakePictures}>
          {this.state.PictureList.map(picture => (
            <OnePictureContainer
              stateHandle={this.stateHandle}
              name={picture.name}
              url={picture.url}
              key={picture.id}
            />
          ))}
        </MainPictureContainer>
        <Footer />
      </MainContainer>
    );
  }
}

// Exporting MainApp component
export default MainApp;
