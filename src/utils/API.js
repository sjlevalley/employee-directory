import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

const BASEURL = "https://randomuser.me/api/?results=50&nat=us";

// Export an object with a "search" method that searches the Giphy API for
// the passed query
export default {
  getEmployees: function () {
    return axios.get(BASEURL);
  },
};


