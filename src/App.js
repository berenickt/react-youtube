import SearchHeader from './components/SearchHeader';

// **** 라우터 설정
import { Outlet } from 'react-router-dom';

// **** 네트워크 통신을 할 React-query 준비
// 1. QueryClient를 생성 후 QueryClientProvider에 props로 넣어줌
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient(); // React-query 준비 (1)

export default function App() {
  return (
    <>
      <SearchHeader />
      {/* 유튜브 데이터 커스텀 Context 씌워주기 */}
      <YoutubeApiProvider>
        {/* Outlet을 사용하는 어떤 곳이든 useQuery 사용가능 */}
        <QueryClientProvider client={queryClient}>
          {/* Route 의 children 으로 들어가는 JSX 엘리먼트를 보여주는 역할 */}
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}
