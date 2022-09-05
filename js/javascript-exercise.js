/**
 * Eksempel 3
 * Ændrer texten i H1 tags
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("ex1").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("H1").forEach((element) => {
    //Toggler igennem H1 og erstatter texten
    element.innerHTML = "Jeg er den nye overskrift";
  });
};

/**
 * Eksempel 4
 * Ændrer farven i p tags
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("ex2").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("p").forEach((element) => {
    //Toggler class tx-color-red til elementernes classList
    element.classList.toggle("tx-color-red");
  });
};

/**
 * Eksempel 5
 * roter all li
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("ex3").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("li").forEach((element) => {
    //Toggler class rotate til elementernes classList
    element.classList.toggle("rotate");
  });
};

/**
 * Eksempel 6
 * Gem alle H tags
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("ex4").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((element) => {
    //Toggler class mellem show og hide
    element.classList.toggle("hide");
  });
};

/**
 * Eksempel 7
 * skift typografi på alle hrefs
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("ex5").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("a").forEach((element) => {
    //skifter typografi class
    element.classList.toggle("typo");
  });
};

/**
 * Eksempel 8
 * skift typografi på alle hrefs
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */

document.getElementById("ex6").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("ol").forEach((element) => {
    //skifter typografi class
    let songTitleArray = [
      "13 Wonderful Love Songs",
      "A Hard Rain´s A-Gonna Fall",
      "A Plague of Lighthouse Keepers",
      "After We Shot The Grizzly",
      "And Breeding",
      "And When I Die",
      "Addicted To Love",
      "Welcome to America",
      "Ah! Sweet Mystery Of Life",
      "All I Have Is Love",
      "All Or Nothing At All",
    ];
    let randomNumber = Math.floor(Math.random() * songTitleArray.length); /** get randum number of the length of the songtitlearray */

    let ListItem = document.createElement("li"); /**create listitem */
    let textnode = document.createTextNode(songTitleArray[randomNumber]); /**ad textnode from the songtitles to the li */
    ListItem.appendChild(textnode); /**append the textnode to the li  */

    let list = element;

    list.insertBefore(ListItem, list.children[5]); /**insert ListItem after childitem number 5 */

    list.children[5].classList.toggle("tx-color-red");
  });
};

/**
 * Eksempel 9
 * Ændrer farven i hvert andet p tag
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */

document.getElementById("ex7").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet

  document.querySelectorAll("ol").forEach(() => {
    //skifter på hvert andet

    let list = document.getElementsByTagName("li");

    for (let i = 0, l = list.length; i < l; i++) {
      if (i % 3 === 0) {
        list[i].classList.toggle("tx-color-red");
      }
    }
  });
};

/**
 * Eksempel 9
 * from the left
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */

document.getElementById("ex9").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet

  document.querySelectorAll("ol,ul").forEach((element) => {
    //toggler class twistbody
    // toggle flag

    let pos = -700;
    let id = setInterval(frame, 5);
    function frame() {
      if (pos === 15) {
        clearInterval(id);
      } else {
        pos++;

        element.style.left = pos + "px";
      }
    }
  });
};

/**
 * Eksempel 7
 * skift typografi på alle hrefs
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("ex10").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("button:not(#ex10)").forEach((element) => {
    //skifter typografi class
    element.classList.toggle("hide");
  });
};

/**
 * Eksempel 11
 * roter body 15 grader
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("ex11").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("body").forEach((element) => {
    //toggler class twistbody
    element.classList.toggle("twistbody");
  });
};

/**
 * Eksempel 1
 * Tilføjer/fjerner en css klasse med større skrifttype til alle elementer
 * Benytter metoden addEventListener til at lytte på et onclick event på knappen
 */
document.getElementById("ex12").addEventListener("click", () => {
  //Henter array med alle child elementer til #contentarea
  let elements = document.querySelectorAll("#contentarea *");

  //Lopper array med elementer
  for (let i = 0; i < elements.length; i++) {
    //Tilføj klassen tx-big hvis den ikke eksisterer i et elements classList
    if (!elements[i].classList.contains("tx-big")) {
      elements[i].classList.add("tx-big");
    }
  }
});

/**
 * Eksempel 2
 * Toggler en css klasse med større skrifttype til alle elementer
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById("ex13").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("#contentarea *").forEach((element) => {
    //Toggler class tx-big til elementernes classList
    element.classList.toggle("tx-big");
  });
};

/**tilføj class til alle der gør vores switch statement sand */
document.querySelectorAll("button").forEach((element, i) => {
  console.log("index ", i);

  switch (true) {
    case (i + 1) % 2 === 0 && (i + 1) % 4 === 0:
      element.classList.add("purple");
      break;

    case (i + 1) % 5 === 0:
      // element.classList.add("blue");
      break;
    default:
  }
});

document.querySelectorAll("button").addEventListener("click", (element) => {
  console.log("element ", element);
});
