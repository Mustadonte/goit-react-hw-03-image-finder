import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { apiService } from 'services/apiService';
import { Loader } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { ToastContainer } from 'react-toastify';
import { Modal } from 'components/Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    perPage: '12',
    loading: false,
    modalImg: {},
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, perPage, page } = this.state;

    if (this.state.query === '') {
      return;
    }

    if (prevState.query !== this.state.query) {
      this.setState({ images: [], loading: true, page: 1 });
      apiService(query, perPage, page)
        .then(images => this.setState({ images: [...images] }))
        .finally(() => this.setState({ loading: false }));
    }
    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      apiService(query, perPage, page)
        .then(images =>
          this.setState({ images: [...prevState.images, ...images] })
        )
        .finally(() => this.setState({ loading: false }));
    }
  }
  onSubmit = data => {
    if (this.state.query === data) {
      apiService(this.state.query, this.state.perPage, this.state.page)
        .then(images => this.setState({ images: [...images] }))
        .finally(() => this.setState({ loading: false }));
    }
    this.setState({ query: data, images: [] });
  };

  onLoadMoreButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onImgClick = clickedImg => {
    this.setState({ modalImg: clickedImg });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} data={this.onImgClick} />
        )}
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 ? (
          <LoadMoreButton onClick={this.onLoadMoreButtonClick} />
        ) : (
          ''
        )}

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.modalImg.src} alt={this.props.tags} />
          </Modal>
        )}

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
      </>
    );
  }
}
