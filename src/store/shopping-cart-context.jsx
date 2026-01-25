/*
The store folder is not required, yet it is a common convention. This is where we store our context
variables that will be utilized by the components.
*/

import { createContext } from "react";
/*
We are deliberately capitilizing the first letter of our constant because createContext() returns an
object which contains a React component. We can pass an initial value to createContext() that will
later be used by multiple components that are wrapped by this context. The initial value provided
can be of any type; here, we will use an object. The reason we use an object is because we will want
to add more fields to the our CartContext.
*/
/*
Once we declare our context variable, we next need to provide this context with the appropriate
components. We need wrap this context around parts of the component tree. We can provide this
context with the export keyword. We will wrap the Header and Shop components with the context as
they both depend on the shoppingCart state variable.
*/
/*
Adding a default value can add autocompleting using the dot operator or even object destructuring.
*/
export const CartContext = createContext({
  items: [] //Here, we will store our shopping cart items.
});
