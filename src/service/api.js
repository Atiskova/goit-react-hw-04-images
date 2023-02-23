import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32871572-a4574b266bb5c21ae4a6b0f80';
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
  image_type: 'photo',
};

export const getImages = async (query, page) => {
  // const params = {
  //   api_key: API_KEY,
  //   page,
  //   query,
  // };

    const { data } = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}`
    );
    const { hits, totalHits } = data;
    const images = hits.map(({ id, webformatURL, tags, largeImageURL }) => ({
      id,
      webformatURL,
      tags,
      largeImageURL,
    }));
    return { images, totalHits };
  
};
