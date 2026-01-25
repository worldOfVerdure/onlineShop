import { CartContext } from "../store/shopping-cart-context.jsx";
//We need two hooks to consume the context from CartContext.
import { use } from "react"; //We can also use the "use" hook.

export default function Cart({ onUpdateItemQuantity }) {
  /*
    The use hook would allow ussage in block scopped code that isn't top level with the contining
    component.

    if (true) {
      const cartCTX = use(CartContext);
    }

    Use is generally preffered and can be more flexible. This is for React v.19+.
  */
  const cartCTX = use(CartContext);

  const totalPrice = cartCTX.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartCTX.items.length === 0 && <p>No items in cart!</p>}
      {cartCTX.items.length > 0 && (
        <ul id="cart-items">
          {cartCTX.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
