import { createCard } from "./creaSezioni.js";
import { fetchRequest } from "./fetch.js";
import { URL, ACCESSTOKEN, main } from "./costanti.js";

const prodottiPagina = async () => {
  const json = await fetchRequest({
    url: URL,
    key: ACCESSTOKEN,
    method: "GET",
  });
  json.forEach((element) => {
    createCard(
      element.imageUrl,
      element.name,
      element.description,
      element.price,
      element._id,
      main
    );
  });
};


document.addEventListener("DOMContentLoaded", prodottiPagina);
