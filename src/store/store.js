import { create } from "zustand";
import counterSlice from "./slice/counterSlice";
import productSlice from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";
import { devtools, persist } from "zustand/middleware";

const useGlobalStore = create(
    devtools(
        persist((...a) => ({
            ...counterSlice(...a),
            ...productSlice(...a),
            ...cartSlice(...a),
        }))
    )
);

export default useGlobalStore;
