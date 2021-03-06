import Button from "@material-ui/core/Button";
//Types
import { CartItemType } from "../App";
//Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div className="itemDiv">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    {/* cannot use onClick={handleAddToCart(item)} because that will trigger right away. in line function needed.  */}
    <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
  </Wrapper>
);

export default Item;
