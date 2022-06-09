import Collapsible from "react-collapsible";

const FaqItems = (props) => {
  return (
    <Collapsible trigger={props.question}>
      <p>{props.answer}</p>

      <i class="las la-plus"></i>
      <i class="las la-plus"></i>
      <i class="las la-plus"></i>
      <i class="las la-plus"></i>
    </Collapsible>
  );
};

export default FaqItems;
