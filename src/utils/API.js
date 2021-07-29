import axios from "axios";

export default {
  // API request to server side

  loadMember(
    id
    // , token
  ) {
    return axios.get(
      `/api/loadmember/${id}`
      // , token
    );
  },
};
