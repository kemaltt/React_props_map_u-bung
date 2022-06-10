import "./App.css";
import Faq from "./components/Faq";
import Movie from "./components/Movie";
import Product from "./components/Product";
import TodoList from "./components/TodoList";
import TodoList2 from "./components/TodoList2";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Product />
      <Faq />
      <Movie />
      <TodoList2 />
    </div>
  );
}

export default App;
