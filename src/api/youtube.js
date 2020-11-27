import axios from "axios";

export function listVideo(query) {
  const data = {
    apikey: query.apikey,
  };
  console.log("UU", data.apikey);
  return axios({
    url:
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
      data.apikey,
    method: "get",
  });

  //   return axios({
  //     url: "https://reqres.in/api/users?page=2",
  //     method: "get",
  //   });
}
