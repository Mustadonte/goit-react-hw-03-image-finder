import {
  ImageGalleryListItem,
  ImageGalleryListItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  largeImageURL,
  webformatURL,
  tags,
  data,
}) => {
  const onClickItem = e => {
    const clickedImg = {
      src: largeImageURL,
      alt: tags,
    };

    data(clickedImg);
  };

  return (
    <>
      <ImageGalleryListItem key={id}>
        <ImageGalleryListItemImg
          src={webformatURL}
          alt={tags}
          onClick={onClickItem}
        />
      </ImageGalleryListItem>
    </>
  );
};
