import {
  ImageGalleryListItem,
  ImageGalleryListItemImg,
} from './Image.Gallery.Item.styled';

export const ImageGalleryItem = ({ id, largeImageURL, webformatURL }) => {
  <ImageGalleryListItem id={id}>
    <ImageGalleryListItemImg src={webformatURL} alt="img" />
  </ImageGalleryListItem>;
};
