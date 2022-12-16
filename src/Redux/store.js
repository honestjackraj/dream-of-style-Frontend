import { configureStore} from "@reduxjs/toolkit";

import cartreduces from "../Redux/reduces"


export default configureStore({
    reducer:{
        cart:cartreduces,
    }
})