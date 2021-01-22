const apiService = {
  baseURL: 'https://pixabay.com/api/',
  key: '19936293-f4c012c315df51b179ddeb0ea',
  searchQuery: '',
  page: 1,
    get query() {
    return this.searchQuery;
  },
    set query(value) {
    this.searchQuery = value;
},
    resetPage() {
    this.page = 1;
  },
    incrementPage() {this.page += 1}
}

function fetchPicture() {
  return
  fetch(`${this.baseURL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`)
    .then(response => response.json())
    .then(({ hits }) => {
      this.incrementPage();
      return hits;
    })
}


export default apiService;