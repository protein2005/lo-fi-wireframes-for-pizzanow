import {createBrowserRouter} from "react-router";
import HomeScreen from "./components/HomeScreen";
import MenuScreen from "./components/MenuScreen";
import CartScreen from "./components/CartScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeScreen,
    },
    {
        path: "/menu",
        Component: MenuScreen,
    },
    {
        path: "/cart",
        Component: CartScreen,
    },
], {basename: "/lo-fi-wireframes-for-pizzanow"});
