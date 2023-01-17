// **** Youtube 데이터를 가져오는 Custom Context

import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';

// **** Mock Data 준비
// import FakeYoutubeClient from '../api/fakeYotubeClient';

// **** 실제 유튜브 Data
import YoutubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

// **** Moock Data와 실제 유튜브 Data
// const client = new FakeYoutubeClient();
const client = new YoutubeClient();

const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
