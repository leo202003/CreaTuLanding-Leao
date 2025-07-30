import { User } from 'lucide-react';
import "../scss/Header.scss";

export function Login({className}) {
  return (
    <div className={className}>
        <User size={28} color='#3F4548'/>
    </div>
  )
}
