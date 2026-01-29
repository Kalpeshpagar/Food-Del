import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "https://food-del-backend-84n1.onrender.com";

    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    // 🔹 Add item to cart
    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    // 🔹 Remove item from cart
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    }

    // 🔹 Calculate total
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find(
                    (product) => product._id === item
                );
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    // 🔹 Fetch food list
    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data);
        } catch (error) {
            console.log("Error fetching food list:", error);
        }
    };

    // 🔹 Load initial data
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();

            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
                axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
                await loadCartData(savedToken);
            }
        }
        loadData();
    }, []);


    // 🔥 Automatically attach token to all axios requests
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [token]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        removeFromCart,
        addToCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
