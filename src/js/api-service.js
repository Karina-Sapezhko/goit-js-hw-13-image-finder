let apiKey = '17937220-71b54ffff2854ec69c40144bd';

export default {
  searchQuery: '',
  page: 1,

  async fetchGallery() {
    let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      this.incrementPage();
      return data.hits;
    } catch (e) {
      console.error(e);
    }
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
