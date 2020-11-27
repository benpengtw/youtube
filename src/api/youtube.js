import axios from "axios";

export function listVideo(query) {
  const data = {
    apikey: query.apikey,
    //channelId: "UCMUnInmOkrWN4gof9KlhNmQ",
    channelId: "yMCWqeroXnc",
  };

  return axios.get(
    "https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails",
    {
      params: {
        id: data.channelId,
        key: data.apikey,
      },
    },
  );

  //   return axios({
  //     url: "https://reqres.in/api/users?page=2",
  //     method: "get",
  //   });
}
