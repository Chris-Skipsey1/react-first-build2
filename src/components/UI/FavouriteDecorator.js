import React from 'react';
import '../UI/Favourite.css';
import { FaHeart } from 'react-icons/fa';


export default function FavouriteDecorator({ isFavourite, unFavourite }) {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Methods -------------------------------------
  // View ----------------------------------------
  return (
    <div className="FavouriteDecorator">
      {
        isFavourite && 
          <div className="Favourite" onClick={unFavourite}>
            
              <FaHeart />
            
          </div>
      }

    </div>
  );
}