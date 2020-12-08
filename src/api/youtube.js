import axios from "axios";

export function listVideo(query) {
  const data = {
    apikey: query.apikey,
    channelId: "jeqH4eMGjhY",
    part: "snippet,contentDetails,status",
    maxResults:50,
    playlist:"UUMUnInmOkrWN4gof9KlhNmQ"
  };

  return axios.get(
    "https://youtube.googleapis.com/youtube/v3/playlistItems",
    {
      params: {
        part: data.part,
        playlistId: data.playlist,
        key: data.apikey,
        maxResults:data.maxResults
      },
    },
  )
//Results 100，
  .then(function (response) {
    const listPage1=response.data.items
      return axios.get(
        "https://youtube.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            part: data.part,
            playlistId: data.playlist,
            key: data.apikey,
            maxResults:data.maxResults,
            pagetoken:response.data.nextPageToken

          },
        },
      )
      .then(function (response) {
          const listPage2=response.data.items
          return listPage1.concat(listPage2)
      }) 
  })
}
