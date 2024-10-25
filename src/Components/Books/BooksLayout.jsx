import React, { useState } from "react";
import BookCard from "./BookCard";
import { BookBoard } from "./BookBoard";
import Header from "../shaerd/Header";

const BooksLayout = () => {
  const defaultBook = {
    id: crypto.randomUUID(),
    bookname: " আর-রাহিকুল মাখতুম",
    authorname: "আল্লামা সফিউর রহমান মুবারকপুরী (রহ.)",
    imageurl:
      "https://www.ruhamashop.com/wp-content/uploads/2024/05/ar-rahikul-makhtum.jpg",
    rating: "5",
    price: "500",
    category: "সমকালীন প্রকাশনি",
    review: "",
  };
  const [books, setBooks] = useState([defaultBook]);
  return (
    <div className="mt-40">
      <BookBoard books={books} />
      <Header/>
    </div>
  );
};

export default BooksLayout;
