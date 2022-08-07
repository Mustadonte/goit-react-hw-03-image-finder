import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { apiService } from 'services/apiService';
export class App extends Component {
  state = {
    query: '',
    images: [],
    page: '',
    perPage: '12',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images === this.state.images || prevState.images === []) {
      apiService(this.state.query, this.state.perPage, this.state.page).then(
        images => this.setState({ images: [...images] })
      );
    }
  }
  onSubmit = data => {
    this.setState({ query: data });
  };

  setImaeges = images => {
    this.setState({ images: [...this.state.images, ...images] });
  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}
