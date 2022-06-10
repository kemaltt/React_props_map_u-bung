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
        <ul>
          <TodoItem
            text={data[0].text}
            img1={data[0].img1}
            img2={data[0].img2}
          />
          <TodoItem
            text={data[1].text}
            img1={data[1].img1}
            img2={data[1].img2}
          />
          <TodoItem
            text={data[2].text}
            img1={data[2].img1}
            img2={data[2].img2}
          />
          <TodoItem
            text={data[3].text}
            img1={data[3].img1}
            img2={data[3].img2}
          />
          <TodoItem
            text={data[4].text}
            img1={data[4].img1}
            img2={data[4].img2}
          />
          <TodoItem
            text={data[5].text}
            img1={data[5].img1}
            img2={data[5].img2}
          />
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
