
import react,{useState} from 'react'
import { Button,Card, CardBody ,Container} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from './Icon';

const itemArray=new Array(9).fill('empty');
function App() {
  const [isCross,setCross]=useState(false);
  const [winMsg,setWiner]=useState(0);
  function changeItem(itemNumber){
     
    if(winMsg){
      return toast(winMsg,{type:"success"})
    }
    if(itemArray[itemNumber]==="empty"){
      itemArray[itemNumber]= isCross? "cross":'circle';
      setCross(!isCross);
    }else{
      return toast("already set",{type:'error'});
    }

  }
  const reloadGame=()=>{
    setCross(false);
    setWiner("");
    itemArray.fill("empty");

  };
  
  return (
    <>
    <Container>
    <ToastContainer position='bottom-center'/>
      {winMsg
      ?(
        <div>
          <h1 className='heading'>  {winMsg} </h1>
        <Button  color='success' onClick={reloadGame()}> Reset </Button>
        </div>
      )
      : (
        <div>
         <h1 className='heading'> {isCross ? ("cross") : ("circle")  }     turns</h1>
        </div>
      )
      }

     <div className='grid'>
     {
      itemArray.map((item,index)=>{
        return (
          <Card color='warning' onClick={()=>{changeItem(index)}}>
          <CardBody className='box'>
          <Icon player={item}/>
          </CardBody>
            
          </Card>
        )
      })
    }

     </div>
    
     </Container>

    </>
  );
}

export default App;
