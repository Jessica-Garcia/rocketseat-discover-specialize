import axios from "axios";

axios
  .get("https://api.github.com/users/Jessica-Garcia")
  .then((response) => axios.get(response.data.repos_url))
  .then(repos => repos.data)
  .catch((error) => console.log(error));
  