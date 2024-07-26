

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerpath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
 

    baseUrl: 'https://youtube-music-api3.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'x-rapidApi-key',
     

        'e0f162d602mshce565c7695235a5p1cd2dbjsnf83647ec8674',
      ); return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopcharts: builder.query({ query: () => '/next?id=UD7XQVRY5K8' }),
    getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?tracks_id=${songid}`})
  }),
});

export const { 
  useGetTopchartsQuery,
useGetSongDetailsQuery
} = shazamCoreApi;