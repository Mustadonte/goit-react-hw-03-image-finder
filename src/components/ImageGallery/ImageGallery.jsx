import { ImgaeGalleryList } from './ImageGallery.stelyd';
import { ImageGalleryListItem } from 'components/ImageGalleryItem/Image.Gallery.Item.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImgaeGalleryList>
      {images.map(({ id, largeImageURL }) => {
        return (
          <li key={id}>
            <img src={largeImageURL} alt="img" />
          </li>
        );
      })}
    </ImgaeGalleryList>
  );
};
