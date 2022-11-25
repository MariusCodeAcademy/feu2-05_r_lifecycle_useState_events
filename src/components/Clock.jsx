import { useState } from 'react';

function Clock() {
  const [timeObj, setTimeObj] = useState(new Date());

  const hours = timeObj.getHours();
  const min = timeObj.getMinutes();
  const sec = timeObj.getSeconds();

  return (
    <h2 className='card'>
      {hours}:{min}:{sec}
    </h2>
  );
}

export default Clock;
