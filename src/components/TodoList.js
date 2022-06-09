import TodoItem from "./TodoItem";

let data = [
  {
    text: "Hit the gym",
    img1: "images/check.png",
    img2: "images/gym.png",
  },
  {
    text: "Pay bills",
    img1: "images/check.png",
    img2: "images/bill.png",
  },
  {
    text: "Meet George",
    img1: "images/doing.png",
    img2: "images/dance.png",
  },
  {
    text: "Buy eggs",
    img1: "images/doing.png",
    img2: "images/eat.png",
  },
  {
    text: "Read a book",
    img1: "images/no.png",
    img2: "images/book.png",
  },
  {
    text: "Organize office",
    img1: "images/no.png",
    img2: "images/organize.png",
  },
];

const TodoList = () => {
  return (
    <div>
      <h5> Reactjs Lev1_3 </h5>
      <div className="list">
        <h1> To do list </h1>
        {data.map((el, i) => (
          <TodoItem key={i} text={el.text} img1={el.img1} img2={el.img2} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
