
import { useParams, Link } from "react-router-dom";

export default function Character({ characters }) {
  const { id } = useParams();
  const character = characters.find(c => c.id === parseInt(id));

  if (!character) return <h2>Personaje no encontrado</h2>;

  return (
    <div>
        <div>
             <Link className="aback-home" to="/">Volver</Link>
        </div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <h3>Episodios:</h3>
      <ul>
        {character.episode.map((ep, index) => (
          <li key={index}>{ep}</li>
        ))}
      </ul>
    </div>
  );
}
