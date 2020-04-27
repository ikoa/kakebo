import { createSlice } from '@reduxjs/toolkit';

const get = (keyword: string) => {
  axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&limit=12&api_key=${api_key}&format=json`,
      {
        responseType: "json"
      }
    )
    .then(function(res) {
      const result: Albummatches = qs.parse(res.data.results.albummatches);
      const albms: Array<Album> = result.album;
      console.log(albms);
      albms.forEach(item => console.log(item.artist));
      setRes(albms);
    })
    .catch(function(error) {
      console.log("ERRRRRRRROR", error);
      return [];
    });
};

type State = {
  url: string;
};

const initialState: State = {
  url: 'https://lastfm.freetls.fastly.net/i/u/174s/248cb85037351002251836e5f2f0d76b.png',
};
