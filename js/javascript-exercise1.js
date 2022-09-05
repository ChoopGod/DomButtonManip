/**
 *
 * lytter efter at DOMén er færdig med at loade.
 * først derefter køres de funktioner der er i scriptet
 */
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h2").forEach((element) => {
    /**for hvert h2 tag køres der de includere emner i skriptet */
    /**opret et div tag */

    let ListItem = document.createElement("div");
    /**tilføj en class animated til dette tag */

    ListItem.setAttribute("class", "animated");

    /* element.parentNode er den container der er "forældre" for de fundne elementer. */
    let parent = element.parentNode;

    /** for at visualisere hvilken container der er forældre for element */
    parent.classList.add("parentborder");

    /** igen for at visualisere hvem element´s nærmeste søskende er */
    element.nextElementSibling.classList.add("siblingborder");

    /* element.nextSibling er den næste "søskende" for det pågældende element */
    /* Så reelt siger koden, find min forældre, og indsæt det Listitem lige før min næste søskende */
    parent.insertBefore(ListItem, element.nextSibling);
  });

  /**få vores frø til at hoppe */
  document.querySelectorAll(".animated").forEach((element) => {
    //tilføj klassen bounce til elementet
    element.classList.toggle("bounce");
  });
});

document.getElementById("ex10").onclick = () => {};

document.getElementById("ex1").onclick = () => {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll("H1").forEach((element) => {
    //Toggler igennem H1 og erstatter texten
    element.innerHTML = "Jeg er den nye overskrift";
  });
};

document.querySelectorAll("li").forEach((bo) => {
  /**finder all tags af type button */
  console.log(bo);

  bo.addEventListener("click", (e) => {
    /** lytter efter klik på buttons der bliver fundet */
    console.log("li ", e.target.innerHTML); /**logger værdien på knappens innerHTML */
  });
});

