export const createForm = (      //creazione base per il form per gli articoli
  container,
  { name = "",
    desc = "",
    brand = "",
    img = "",
    price }
) => {

  const form = document.createElement("div");
  form.classList.add("inputForm", "d-flex", "flex-column");

  const row1 = createRow();
  const inputName = createInput({
    type: "text",
    placeholder: "Name",
    ariaLabel: "name",
    id: "input_name",
    content: name,
  });
  const inputDesc = createInput({
    type: "text",
    placeholder: "Description",
    ariaLabel: "description", //migliorare accessibilità
    id: "input_desc",
    content: desc,
  });
  row1.appendChild(inputName);
  row1.appendChild(inputDesc);
  form.appendChild(row1);


  const row2 = createRow();
  const inputBrand = createInput({
    type: "text",
    placeholder: "Brand",
    ariaLabel: "brand",  //migliorare accessibilità 
    id: "input_brand",
    content: brand,
  });
  const inputImg = createInput({
    type: "text",
    placeholder: "Img-URL",
    ariaLabel: "img-url",  //migliorare accessibilità
    id: "input_img",
    content: img,
  });
  const inputPrice = createInput({
    type: "number",
    placeholder: "0.00",
    ariaLabel: "price",  //migliorare accessibilità
    id: "input_price",
    content: price,
  });
  row2.appendChild(inputBrand);
  row2.appendChild(inputImg);
  row2.appendChild(inputPrice);
  form.appendChild(row2);

  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add("btn", "btn-dark", "align-self-center");
  btnSubmit.setAttribute("type", "button");
  btnSubmit.setAttribute("id", "btn-submit_prod");
  btnSubmit.textContent = "Submit";

  form.appendChild(btnSubmit);

  container.appendChild(form);
};


//funzione per gli input
export function createInput({ type, placeholder, ariaLabel, id, content }) {
  const col = document.createElement("div");
  col.className = "col-12 col-lg";

  const input = document.createElement("input");
  input.className = "form-control bg-dark";
  input.setAttribute("data-bs-theme", "dark");
  input.type = type;
  input.placeholder = placeholder;
  input.setAttribute("aria-label", ariaLabel);
  input.id = id;
  input.value = content;

  col.appendChild(input);
  return col;
}


export const createRow = () => {
  const row = document.createElement("div");
  row.classList.add("row", "g-3", "zonaForm");
  return row;
};


//creazione lista di prodotti che si vuole inserire/modificare
export function creaLista(container, name, id) {

  const li = document.createElement("li");
  li.className = "listaProdotti";
  li.id = id;

  const text = document.createElement("p");
  text.className = "text-truncate";
  text.textContent = name;
  li.appendChild(text);


  const iconsContainer = document.createElement("div");
  iconsContainer.className = "iconeListaProdotti";
  li.appendChild(iconsContainer);

  //icona per la modifica
  const iconaModifica = document.createElement("ion-icon");
  iconaModifica.setAttribute("name", "create");
  iconaModifica.className = "icon_edit";//applico classe per lo stile CSS
  iconsContainer.appendChild(iconaModifica);

  //icona per l'eliminazione
  const iconaElimina = document.createElement("ion-icon");
  iconaElimina.setAttribute("name", "trash");
  iconaElimina.className = "icon_delete"; //applico classe per lo stile CSS
  iconsContainer.appendChild(iconaElimina);

  container.appendChild(li);
}

//crea le card dei prodotti
export function createCard(src, title, desc, price, id, container) {

  const cardWrapper = document.createElement("div");
  cardWrapper.className = "card col-3";

  //immagine della card
  const cardImg = document.createElement("img");
  cardImg.className = "card-img-top";
  cardImg.src = src;
  cardWrapper.appendChild(cardImg);

  // body della card
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.id = id;
  cardWrapper.appendChild(cardBody);

  //link del prodotto
  const titleLink = document.createElement("a");
  titleLink.className = "card-title_link";
  titleLink.href = `detail.html?id=${id}`;
  titleLink.target = "_blank";
  cardBody.appendChild(titleLink);

  // titolo della card
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title text-truncate";
  cardTitle.textContent = title;
  titleLink.appendChild(cardTitle);

  //descrizione del prodotto
  const cardDesc = document.createElement("p");
  cardDesc.className = "card-text text-truncate";
  cardDesc.textContent = desc;
  cardBody.appendChild(cardDesc);

  // Creazione del pulsante della carta
  const cardBtn = document.createElement("a");
  cardBtn.className = "btn btn-primary  card_btn";
  cardBtn.href = "#";
  cardBtn.textContent = `$${price}`;
  cardBody.appendChild(cardBtn);


  container.appendChild(cardWrapper);
}

//crea la card della sezione dettagli

export function createCardDetail(src, title, desc, price) {
  //immagine di sfondo
  const sezioneDettagli = document.createElement("div");
  sezioneDettagli.className = "dettagliSfondo";


  // container della sezione dettagli
  const detailContainer = document.createElement("div");
  detailContainer.className = "dettagli row ";
  sezioneDettagli.appendChild(detailContainer);

  // immagine del prodotto
  const detailImg = document.createElement("img");
  detailImg.className = "dettagli_img col-6";
  detailImg.src = src;
  detailContainer.appendChild(detailImg);

  // card dei dettagli del prodotto
  const detailTextContainer = document.createElement("div");
  detailTextContainer.className = "dettagli_testo col-6";
  detailContainer.appendChild(detailTextContainer);

  // titolo prodotto
  const detailTitle = document.createElement("h1");
  detailTitle.className = "dettagli_titolo col-12";
  detailTitle.textContent = title;
  detailTextContainer.appendChild(detailTitle);

  // descrizione del prodotto
  const detailDesc = document.createElement("h2");
  detailDesc.className = "dettagliDescrizione";
  detailDesc.textContent = desc;
  detailTextContainer.appendChild(detailDesc);

  // prezzo del prodotto 
  const detailPrice = document.createElement("h4");
  detailPrice.className = "dettagliPrezzo";
  detailPrice.textContent = `$${price}`;
  detailTextContainer.appendChild(detailPrice);


  document.body.appendChild(sezioneDettagli);
}
