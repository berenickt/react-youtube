import React from 'react';

// **** 파라미터 정보를 가져오기
// (1) import
// (2) userParams 정보를 변수에 저장
// (3) 파리미터 값 사용
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext'; // 커스텀 Context 가져오기

export default function Videos() {
  const { keyword } = useParams(); // 파라미터 정보를 가져오기(2)
  const { youtube } = useYoutubeApi(); // 커스텀 Context 가져오기

  // **** 네트워크 통신을 할 React-query
  // app.js에서 QueryClientProvider client={queryClient로 넘겨줘서 useQuery 사용 가능함
  // useQuery는 2가지 파라미터가 필요
  // - 첫번쨰 : 캐쉬키
  // - 두번쨰 : 어떻게 가지고 오는지의 콜백함수
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러 : 무언가가 잘못되었어요.😖</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 gap-y-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
