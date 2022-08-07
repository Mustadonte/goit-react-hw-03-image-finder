import { ImgaeGalleryList } from './ImageGallery.stelyd';
import { ImageGalleryListItem } from 'components/ImageGalleryItem/Image.Gallery.Item.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImgaeGalleryList>
      {images.map(({ id, largeImageURL }) => {
        return <ImageGalleryListItem key={id} largeImageURL={largeImageURL} />;
      })}
    </ImgaeGalleryList>
  );
};
