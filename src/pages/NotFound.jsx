import React from 'react';
import SearchHeader from './../components/SearchHeader';

export default function NotFound() {
  return (
    <>
      <SearchHeader />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div>
          <h1 className="bg-red-500 text-center text-6xl my-5">404</h1>
          <p className="text-center text-lg">페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
    </>
  );
}
