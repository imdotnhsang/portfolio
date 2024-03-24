import { Button } from '@/components';

const App = () => {
  return (
    <div className=''>
      <div className='w-[120px]'>
        <Button fullW>Click me</Button>
      </div>
      <Button color='black'>Click me</Button>
      <Button variant='ghost'>Click me</Button>
    </div>
  );
};

export default App;
