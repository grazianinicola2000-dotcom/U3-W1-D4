import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import fantasyBooks from "./data/fantasy.json";
import BookList from "./components/BookList.jsx";

function App() {
  return (
    <>
      <MyNav title="EpiBook" />
      <Welcome />
      <BookList books={fantasyBooks} />
      <MyFooter />
    </>
  );
}

export default App;
