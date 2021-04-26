import React from "react";
import Book from "./books/Books";
const books = [
  {
    title: "first book",
    img:
      "https://thumbs-prod.si-cdn.com/c0VP9nb5bbooVSqQEjHk3q9S35c=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/91/91/91910c23-cae4-46f8-b7c9-e2b22b8c1710/lostbook.jpg",
    txt:
      " hristopher Columbus may have explored oceans, but his illegitimate son, Hernando Colón, explored the mind. In the 16th century, he amassed somewhere between 15,000 and 20,000",
    authour: "Jason Daley",
  },
  {
    title: "second book",
    img:
      "https://britishheritage.com/wp-content/uploads/2011/07/BRHP-110700-BIBLE-0111.jpg?t=1611913990",
    txt: "still the word after 400 years ",
    authour: "The King James Bible",
  },
  {
    title: "three book",
    img:
      "https://ugc.futurelearn.com/uploads/images/ee/01/promo_small_ee0197da-17ee-4ffc-985a-d6e05b1f6dec.jpg",
    txt:
      "Explore the history of the book during the early modern period and learn how the invention of printing revolutionized our world. ",
    authour: "  Aesop’s Fables",
  },
];
const BookList = () => {
  return (
    <div className="boxes">
      {books.map((book) => {
        // const { title, img, txt, authour } = book;
        return (<Book book={book}></Book>);
      })}
    </div>
  );
};
export default BookList;
