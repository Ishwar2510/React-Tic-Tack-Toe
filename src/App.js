
import react,{useState} from 'react'
import { Button,Card, CardBody } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from './Icon';

const itemArray=new Array(9).fill('empty');
function App() {
  const [isCross,setCross]=useState(false);
  const [winMsg,setWiner]=useState(0);
  
  return (
    <>
      {winMsg
      ?(
        <div>
        {winMsg}
        <Button > Reset </Button>
        </div>
      )
      : (
        <div>
          {isCross
          ?("circle"):("cross") }     turns
        </div>
      )
      }

     <div className='grid'>
     {
      itemArray.map((item,index)=>{
        return (
          <Card color='warning'>
          <CardBody className='box'>
          <Icon player={item}/>
          </CardBody>
            
          </Card>
        )
      })
    }

     </div>
    
    

    </>
  );
}

export default App;
