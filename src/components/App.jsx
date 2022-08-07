import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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

        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}