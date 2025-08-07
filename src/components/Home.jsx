import { Promos } from './Promos';
import { Destacados } from './Destacados'

export function Home() {
  return (
    <section className="home container">
        <Promos />
        <Destacados />
    </section>
  )
}
