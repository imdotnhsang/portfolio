import { Button } from '@/components';
import { Ri24HoursLine } from '@remixicon/react';

const App = () => {
  return (
    <div className='font-sans'>
      app page <Button startIcon={Ri24HoursLine}>123</Button>
    </div>
  );
};

export default App;
