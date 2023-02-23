import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    const { showModal } = this.state;

    return (
      <GalleryItem onClick={this.toggleModal}>
        <Image src={webformatURL} alt={tags} />
        {showModal && <Modal onClose={this.toggleModal}><img src={largeImageURL} alt={tags} /></Modal>}
      </GalleryItem>
    );
  }
}