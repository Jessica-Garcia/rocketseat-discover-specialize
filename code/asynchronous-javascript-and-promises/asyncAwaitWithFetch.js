async function start() {
    try {
        const url = "https://api.github.com/users/Jessica-Garcia"
        const response = await fetch(url);
        const user = await response.json();
        const resposResponse = await fetch(user.repos_url);
        const reposJson = await resposResponse.json();
        console.log(reposJson);
    } catch (error) {
        console.log(error);
    }
  }
start();
