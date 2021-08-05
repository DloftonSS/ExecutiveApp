import axios from "axios";

export default {
  // API request to server side

  loadMember(id) {
    return axios.get(`/executiveAccount/${id}`);
  },
};
