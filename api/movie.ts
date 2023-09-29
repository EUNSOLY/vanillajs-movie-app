// node.js환경에서 작동하는 코드로 fetch작동이 불가능하여 node-fecth 라이브러리 사용
import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

const { APIKEY } = process.env;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { title, page, id } = JSON.parse(request.body as string);
  const url = id
    ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`;
  const res = await fetch(url);
  const json = await res.json();
  response.status(200).json(json);
}
