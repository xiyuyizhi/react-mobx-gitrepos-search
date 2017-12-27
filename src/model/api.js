
import axios from "axios"

export function fetchRepos(search, page) {
  return axios.get(`https://api.github.com/search/repositories?q=${search}&page=${page}&per_page=10`).then(res => res.data)
}