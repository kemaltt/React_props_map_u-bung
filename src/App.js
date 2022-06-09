import "./App.css";
import Faq from "./components/Faq";
import Movie from "./components/Movie";
import Product from "./components/Product";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Product />
      <Faq />
      <Movie />
    </div>
  );
}

export default App;
