import axios from "axios";

export function listVideo(query) {
  const data = {
    apikey: query.apikey,
    channelId: "yB9YtWk2EXI",
    maxResults: 50,
    playlist: "UUj_z-Zeqk8LfwVxx0MUdL-Q",
    regionCode: "tw"
  };

  return axios.get(
    "https://youtube.googleapis.com/youtube/v3/videos?",
    {
      params: {
        part: "contentDetails,snippet",
        chart: "mostPopular",
        key: data.apikey,
        maxResults: data.maxResults,
        regionCode: data.regionCode
      },
    },
  )
    //合併2個長度50的playlist
    .then(function (response) {
      console.log("YUY", response);
      const listPage1 = response.data.items
      return axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos?",
        {
          params: {
            part: "contentDetails,snippet",
            chart: "mostPopular",
            key: data.apikey,
            maxResults: data.maxResults,
            regionCode: data.regionCode,
            pageToken: response.data.nextPageToken

          },
        },
      )
        .then(function (response) {
          console.log("RERE", response);
          const listPage2 = response.data.items
          return listPage1.concat(listPage2)
        })
    })
}
