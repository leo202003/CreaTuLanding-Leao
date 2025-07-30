import { createContext, useState, useContext } from 'react';

const FavContext = createContext();

export function FavProvider({children}) {
    const [favItems, setFavItems] = useState([]);

    function addFavorite(item) {
        const favItemsCopy = [...favItems];
        if (!favItemsCopy.find(prod => prod.id === item.id)) {
            setFavItems(prev => [...prev, item]);
        }
    }

    function removeFavorite(id) {
        setFavItems(prev => prev.filter(item => item.id !== id));
    }
  
    return (
        <FavContext.Provider value={{addFavorite, favItems, removeFavorite}}>
            {children}
        </FavContext.Provider>
    )
}

export const useFav = () => useContext(FavContext);