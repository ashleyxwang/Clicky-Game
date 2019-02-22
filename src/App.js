import React, { Component } from 'react';
import GifTile from './components/GifTile'


class App extends Component {

  alreadyClicked = [];

  state = {

    Tiles: [
      "camel",
      "dogChasing",
      "dogPettingKid",
      "foxJump",
      "hamster",
      "horse",
      "horseLick",
      "mirrorDog",
      "monkeys",
      "pig",
      "raccoonBike",
      "sloth"
    ],

    Points: 0,
    TopScore: 1,
  }


  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  handleClick = (gif) => {
    console.log("clicked!", gif);
    
    let { Points, TopScore } = this.state;

    const Tiles = [...this.state.Tiles];
    this.shuffle(Tiles);

    if (this.alreadyClicked.includes(gif)) {
      console.log("ya clicked dis already dummy");

      if (Points > TopScore) {
        TopScore = Points
      }

      // reset points
      Points = 0;

      // clear out alreadyclicked array
      this.alreadyClicked = [];

    } else {
      this.alreadyClicked.push(gif);
      Points = (Points + .1) * 1.74;
      
    }

    this.setState({
      Tiles,
      Points,
      TopScore
    });
  }


  render() {

    const GifTiles = this.state.Tiles.map(val => (
      <div className="col-3">
        <GifTile
          value={val}
          src={`./GifSource/${val}.gif`}
          onClick={() => this.handleClick(val)}
        />
      </div>
    ));


    return (
      <div className="App">

        <div className="container">

          <div className="row">
            {GifTiles.slice(0, 4)}
          </div>

          <div className="row">
            {GifTiles.slice(4, 8)}
          </div>

          <div className="row">
            {GifTiles.slice(8, 12)}
          </div>

        </div>

        <div>
          <p>Points: {this.state.Points}</p>
          <p>Top Score: {this.state.TopScore}</p>
        </div>

      </div>
    );
  }

}

export default App;
