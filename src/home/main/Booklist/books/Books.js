import React from "react";

const Book = (props) => {
  const { title, img, txt, authour } = props.book;
  return (
    <div className="itembox">
      <h1>{title}</h1>
      <img src={img} alt="" />
      <h5>{txt}</h5>
      <h6>{authour}</h6>
    </div>
  );
};
export default Book;
