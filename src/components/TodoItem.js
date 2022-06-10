const TodoItem = (props) => {
  // console.log(props);
  return (
    <>
      <li> {props.text} </li>
      <img src={props.img1} alt="img1" />
      <img src={props.img2} alt="img2" />
    </>
  );
};

export default TodoItem;
