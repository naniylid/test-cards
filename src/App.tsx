import './assets/styles/App.scss';
import Card from './components/Card';
import Rectangle from './components/Rectangle';

function App() {
  const numberOfCards = 12;

  const cards = Array.from({ length: numberOfCards }).map((_, index) => <Card key={index} />);

  return (
    <>
      <Rectangle />
      <div className='cards'>{cards}</div>
    </>
  );
}

export default App;
