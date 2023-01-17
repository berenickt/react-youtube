// **** timeago 라이브러리로 비디오카드의 날짜를 한글로 포매팅
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function formatAgo(date, lang = 'ko') {
  return format(date, lang);
}
