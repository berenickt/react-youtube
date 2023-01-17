import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RiYoutubeFill } from 'react-icons/ri';

// **** 파라미터 정보를 가져오기
// (1) import
// (2) userParams 정보를 변수에 저장
// (3) 파리미터 값 사용
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  // **** 사용자가 입력한 검색값으로 경로 이동
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      {/* 로고 부분 */}
      <Link to="/" className="flex items-center">
        <RiYoutubeFill className="text-5xl text-brand  " />
        <h1 className="font-bold ml-1 text-3xl">Youtube</h1>
      </Link>

      {/* 검색 부분 */}
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
