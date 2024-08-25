import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  method: 'GET',
  params: {
    maxResults: 50,
  },
  headers: {
    'x-rapidapi-key': '79eed9fc73msha8a03dacd5162c8p1e95d2jsne849a33d8300',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};
export const FetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

