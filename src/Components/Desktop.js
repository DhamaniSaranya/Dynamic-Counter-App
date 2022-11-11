import { useState } from 'react'; 
import Barbara from './Barbara.js';
import Button from './Button.js';

function Desktop() { 
  
  const [components, setComponents] = useState([]); 
  const [num, setNum] = useState(1)


  function addComponent() { 
    setNum (num+1)
    setComponents([...components, num ]) 

  } 
  return ( 
    
    <div> 
  
      <Button onClick={addComponent}/> 
      {components.map((item, i) => ( <Barbara key={item.toString()} text={"Counter "+item}/> ))}

    </div> 
    
  ) 
  
} 

export default Desktop;