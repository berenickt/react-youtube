import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row">
      {/* 비디오 디테일 */}
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className="p-8">
          <h2 className="text-2xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap bg-zinc-700/60 text-blue-500/100">{description}</pre>
        </div>
      </article>
      {/* 관련 비디오   */}
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
