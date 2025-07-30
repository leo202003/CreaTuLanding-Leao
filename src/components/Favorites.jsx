import { Heart } from 'lucide-react';
import "../scss/Header.scss";

export function Favorites({className}) {
  return (
    <div className={className} >
        <Heart size={28} color='#3F4548'/>
    </div>
  )
}
