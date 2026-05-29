import { baseFeelings } from '../data/feelings';

export const  Home = () => {
  const rootFeelings = baseFeelings.filter(f => f.parent_id === null);

  return (
    <div>
      <h1>Mood Tracker - Home</h1>
      <h2>Total feelings loaded: {baseFeelings.length}</h2>
      <h3>Root feelings:</h3>
      <ul>
        {rootFeelings.map(feeling => (
          <li key={feeling.id}>
            {feeling.emoji} {feeling.label} (id: {feeling.id})
          </li>
        ))}
      </ul>
    </div>
  );
}