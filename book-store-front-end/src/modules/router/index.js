import BookList from "../books/containers/BookList";

const routes = [
  { path: "/books", name: "book-list", component: BookList },
  { path: "/add-new-book", name: "add-new-book", component: BookList }
];
export default routes;
