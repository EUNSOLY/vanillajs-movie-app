// node.js환경에서 작동하는 코드로 fetch작동이 불가능하여 node-fecth 라이브러리 사용
import fetch from "node-fetch";
const { APIKEY } = process.env;
export default async function handler(req, response) {
  const { title, page, id } = JSON.parse(req.body);

  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`;
  const res = await fetch(url);
  const json = await res.json();
  response.status(200).json(json);
}
