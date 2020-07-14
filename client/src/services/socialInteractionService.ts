import SocialInteraction from "../models/SocialInteraction";
import { handleError, handleResponse } from "./utils/handlerUtils";

const baseUrl = "http://localhost:5000/api" + "/social-interactions/";

export function getSocialInteractions() {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Origin", "http://localhost:3000");

  return fetch(baseUrl, {
    headers: headers,
    mode: "cors",
    method: "GET",
  })
    .then(handleResponse)
    .catch(handleError);
}
