import { fetchRequest } from "./fetch.js";
import { createCardDetail } from "./creaSezioni.js";
import { URL, ACCESSTOKEN, } from "./costanti.js";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const richiestaDettagli = async () => {
  const json = await fetchRequest({ url: URL, key: ACCESSTOKEN, method: "GET", id: id });
  createCardDetail(json.imageUrl, json.name, json.description, json.price);
}

document.addEventListener("DOMContentLoaded", richiestaDettagli)