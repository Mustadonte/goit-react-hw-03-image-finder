import PropTypes from 'prop-types';
import { ImgaeGalleryList } from './ImageGallery.stelyd';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, data }) => {
  return (
    <ImgaeGalleryList>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            id={id}
            largeImageURL={largeImageURL}
            tags={tags}
            webformatURL={webformatURL}
            data={data}
          />
        );
      })}
    </ImgaeGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  data: PropTypes.func.isRequired,
};
