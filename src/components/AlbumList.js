import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
      .then(err => console.log(err));
  }

  renderAlbums() {
    console.log(this.state.albums);
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
