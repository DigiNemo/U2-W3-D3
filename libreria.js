fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore generico");
    }
  })
  .then((booksData) => {
    console.log("booksData", booksData);

    // seleziono le porzioni del DOM da riempire dinamicamente
    // CARD 1
    // SEZIONE IMG
    const srcImg = document.getElementById("card0");
    const newSrcImg = document.createElement("img");
    newSrcImg.src = booksData[0].img;
    srcImg.appendChild(newSrcImg);
    // SEZIONE TITOLO
    const titleH5 = document.getElementById("card-h50");
    const newTitleH5 = document.createElement("span0");
    newTitleH5.innerText = booksData[0].title;
    titleH5.appendChild(newTitleH5);
    // SEZIONE PREZZO
    const price = document.getElementById("card-p0");
    const newPrice = document.createElement("span0");
    newPrice.innerText = booksData[0].price + "€";
    price.appendChild(newPrice) + "€";
    // CARD 2
    // SEZIONE IMG
    const srcImg1 = document.getElementById("card1");
    const newSrcImg1 = document.createElement("img");
    newSrcImg1.src = booksData[1].img;
    srcImg1.appendChild(newSrcImg1);
    // SEZIONE TITOLO
    const titleH51 = document.getElementById("card-h51");
    const newTitleH51 = document.createElement("span1");
    newTitleH51.innerText = booksData[1].title;
    titleH51.appendChild(newTitleH51);
    // SEZIONE PREZZO
    const price1 = document.getElementById("card-p1");
    const newPrice1 = document.createElement("span1");
    newPrice1.innerText = booksData[1].price + "€";
    price1.appendChild(newPrice1) + "€";
    // CARD 3
    // SEZIONE IMG
    const srcImg2 = document.getElementById("card2");
    const newSrcImg2 = document.createElement("img");
    newSrcImg2.src = booksData[2].img;
    srcImg2.appendChild(newSrcImg2);
    // SEZIONE TITOLO
    const titleH52 = document.getElementById("card-h52");
    const newTitleH52 = document.createElement("span2");
    newTitleH52.innerText = booksData[2].title;
    titleH52.appendChild(newTitleH52);
    // SEZIONE PREZZO
    const price2 = document.getElementById("card-p2");
    const newPrice2 = document.createElement("span2");
    newPrice2.innerText = booksData[2].price + "€";
    price2.appendChild(newPrice2) + "€";
    // CARD 4
    // SEZIONE IMG
    const srcImg3 = document.getElementById("card3");
    const newSrcImg3 = document.createElement("img");
    newSrcImg3.src = booksData[3].img;
    srcImg3.appendChild(newSrcImg3);
    // SEZIONE TITOLO
    const titleH53 = document.getElementById("card-h53");
    const newTitleH53 = document.createElement("span3");
    newTitleH53.innerText = booksData[3].title;
    titleH53.appendChild(newTitleH53);
    // SEZIONE PREZZO
    const price3 = document.getElementById("card-p3");
    const newPrice3 = document.createElement("span3");
    newPrice3.innerText = booksData[3].price + "€";
    price3.appendChild(newPrice3) + "€";
    // CARD 5
    // SEZIONE IMG
    const srcImg4 = document.getElementById("card4");
    const newSrcImg4 = document.createElement("img");
    newSrcImg4.src = booksData[4].img;
    srcImg4.appendChild(newSrcImg4);
    // SEZIONE TITOLO
    const titleH54 = document.getElementById("card-h54");
    const newTitleH54 = document.createElement("span4");
    newTitleH54.innerText = booksData[4].title;
    titleH54.appendChild(newTitleH53);
    // SEZIONE PREZZO
    const price4 = document.getElementById("card-p4");
    const newPrice4 = document.createElement("span4");
    newPrice4.innerText = booksData[4].price + "€";
    price4.appendChild(newPrice4) + "€";
    // CARD 6
    // SEZIONE IMG
    const srcImg5 = document.getElementById("card5");
    const newSrcImg5 = document.createElement("img");
    newSrcImg5.src = booksData[5].img;
    srcImg5.appendChild(newSrcImg5);
    // SEZIONE TITOLO
    const titleH55 = document.getElementById("card-h55");
    const newTitleH55 = document.createElement("span3");
    newTitleH55.innerText = booksData[5].title;
    titleH55.appendChild(newTitleH55);
    // SEZIONE PREZZO
    const price5 = document.getElementById("card-p5");
    const newPrice5 = document.createElement("span5");
    newPrice5.innerText = booksData[5].price + "€";
    price5.appendChild(newPrice5) + "€";
    // CARD 7
    // SEZIONE IMG
    const srcImg6 = document.getElementById("card6");
    const newSrcImg6 = document.createElement("img");
    newSrcImg6.src = booksData[6].img;
    srcImg6.appendChild(newSrcImg6);
    // SEZIONE TITOLO
    const titleH56 = document.getElementById("card-h56");
    const newTitleH56 = document.createElement("span6");
    newTitleH56.innerText = booksData[6].title;
    titleH56.appendChild(newTitleH56);
    // SEZIONE PREZZO
    const price6 = document.getElementById("card-p6");
    const newPrice6 = document.createElement("span6");
    newPrice6.innerText = booksData[6].price + "€";
    price6.appendChild(newPrice6) + "€";
    // CARD 8
    // SEZIONE IMG
    const srcImg7 = document.getElementById("card7");
    const newSrcImg7 = document.createElement("img");
    newSrcImg7.src = booksData[7].img;
    srcImg7.appendChild(newSrcImg7);
    // SEZIONE TITOLO
    const titleH57 = document.getElementById("card-h57");
    const newTitleH57 = document.createElement("span7");
    newTitleH57.innerText = booksData[7].title;
    titleH57.appendChild(newTitleH57);
    // SEZIONE PREZZO
    const price7 = document.getElementById("card-p7");
    const newPrice7 = document.createElement("span7");
    newPrice7.innerText = booksData[7].price + "€";
    price7.appendChild(newPrice7) + "€";
  })
  .catch((err) => {
    console.log(err);
  });
