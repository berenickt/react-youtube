import axios from 'axios';

// **** axios 라이브러리로 가짜 유튜브 데이터 가져오기
export default class FakeYoutubeClient {
  async search({ params }) {
    return axios.get(`/videos/${params.relatedToVideoId ? 'related' : 'search'}.json`);
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
  async channels() {
    return axios.get('/videos/channel.json');
  }
}
