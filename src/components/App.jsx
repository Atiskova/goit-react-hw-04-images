import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Searchbar } from './Searchbar/Searcbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Toast } from './Toast/Toast';
import { Text } from './Text/Text.styled';

import * as ImageService from '../service/api';

// export class App extends React.Component {
//   state = {
//     images: [],
//     page: 1,
//     totalImages: 0,
//     query: '',
//     loading: false,
//     error: '',
//   };

//   componentDidUpdate(_, prevState) {
//     const { query, page, error } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.getImages();
//     }
//     if (prevState.error !== error && error) {
//       toast.error(error);
//     }
//   }

//   getImages = async () => {
//     const { query, page } = this.state;

//     try {
//       this.setState({ loading: true });
//       const { images, totalHits } = await ImageService.getImages(query, page);

//       if (images.length === 0) {
//         toast('Sorry, there are no images matching your search query.');
//         return;
//       }
//       this.setState(prevState => ({
//         images: [...prevState.images, ...images],
//         error: '',
//         totalImages: totalHits,
//       }));
//     } catch (error) {
//       toast('Opps🙀, something went wrong, please try again later');
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   getQuery = value => {
//     if (value === this.state.query) {
//       toast('Please, change your request');
//       return;
//     }
//     this.setState({
//       query: value,
//       images: [],
//       page: 1,
//       totalImages: 0,
//     });
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { images, loading, error, totalImages } = this.state;

//     return (
//       <div className="app">
//         <Searchbar onSubmit={this.getQuery}></Searchbar>
//         {images.length !== 0 && <ImageGallery images={images} />}
//         {!loading && images.length === 0 && !error && (
//           <Text>There are no images yet, please make your search 🞁</Text>
//         )}
//         {!loading && totalImages !== images.length && (
//           <Button onClick={this.loadMore} />
//         )}
//         {loading && <Loader />}
//         <Toast />
//       </div>
//     );
//   }
// }

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    if (!query)  return;

    (async function () {
      try {
        setLoading(true);
        const { images, totalHits } = await ImageService.getImages(query, page);
  
        if (images.length === 0) {
          toast('Sorry, there are no images matching your search query.');
          return;
        }
  
        setImages(prevState => [...prevState, ...images]);
        setError('');
        setTotalImages(totalHits);
      } catch (error) {
        toast('Opps🙀, something went wrong, please try again later');
      } finally {
        setLoading(false);
      }
    })();

   }, [query, page])

  

  const getQuery = value => {
    if (value === query) {
      toast('Please, change your request');
      return;
    }

    setQuery(value);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={getQuery}></Searchbar>
      {images.length !== 0 && <ImageGallery images={images} />}
      {!loading && images.length === 0 && !error && (
        <Text>There are no images yet, please make your search 🞁</Text>
      )}
      {!loading && totalImages !== images.length && (
        <Button onClick={loadMore} />
      )}
      {loading && <Loader />}
      <Toast />
    </div>
  );

};
