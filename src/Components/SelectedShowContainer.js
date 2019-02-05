import React, { Component } from 'react';
import Episode from './Episode';

class SelectedShowContainer extends Component {

  state = {
    selectedSeason: 1,
  }

  mapSeasons = () => {
    if (!!this.props.allEpisodes){
      let seasons = this.props.allEpisodes.map(e => e.season)
      let arr = [];
        for(let i = 0; i < seasons.length; i++) {
          if(!arr.includes(seasons[i])) {
              arr.push(seasons[i]);
          }
        }
      return arr.map(s => <option value={s} key={s}>Season {s}</option>)
    }
  }

  mapEpisodes = () => {
    return this.props.allEpisodes.filter(e => e.season === this.state.selectedSeason)
    .map(e => <Episode myEpisode={e} key={e.id}/>)
  }

  handleSelectionChange = (e) => {
    this.setState({ selectedSeason: parseInt(e.target.value) })
  }


  render() {
    const { selectedShow } = this.props

    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

}

export default SelectedShowContainer;
