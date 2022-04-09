import { useContext, createContext } from "react"
import { useReducer } from "react"
import { WishReducer } from "./WishlistReducer";

const WishlistContext = createContext()
const WishlistProvider = ({ children }) => {

    const [wishlistState, wishlistDispatch] = useReducer(WishReducer, {
        itemsInWishlist: 0,
        wishlistCollection: []
    })

    return <WishlistContext.Provider value={{
        wishlistState, wishlistDispatch
    }}>{children}</WishlistContext.Provider>
}

const useWishlist = () => useContext(WishlistContext)

export { useWishlist, WishlistProvider }