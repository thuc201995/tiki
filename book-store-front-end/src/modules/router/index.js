import BookList from "../books/containers/BookList";
import BookForm from "../books/containers/BookForm";

const routes = [
  { path: "/books", name: "book-list", component: BookList },
  { path: "/book-form/:id", name: "book-form", component: BookForm },
  { path: "/book-form", name: "book-form", component: BookForm }
];
export default routes;
