import axios from "axios";

async function repos() {
    try {
        const url = "https://api.github.com/users/Jessica-Garcia";
        const user = await axios.get(url);
        const repos = await axios.get(user.data.repos_url);
        console.log(repos.data);
    } catch (error) {
        console.log(error);
    }
  }
repos();
