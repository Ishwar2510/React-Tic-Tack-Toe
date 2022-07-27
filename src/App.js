
import react,{useState} from 'react'
import { Button,Card, CardBody ,Container} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from './Icon';

const itemArray=new Array(9).fill('empty');
function App() {
  const [isCross,setCross]=useState(false);
  const [winMsg,setWiner]=useState("");
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
    // setTimeout(()=>{;},5000)
    checkIsWinner();
    

    

  }

  const checkIsWinner=()=>{
    if(itemArray[0]!="empty"&&  itemArray[0]==itemArray[1]&& itemArray[0]==itemArray[2]){
      setWiner(`${itemArray[0]} won`);

    }
    else if (itemArray[3]!="empty"&&  itemArray[3]==itemArray[4]&& itemArray[3]==itemArray[5]){
      setWiner(`${itemArray[3]} won`);
    }else if(itemArray[6]!="empty"&&  itemArray[6]==itemArray[7]&& itemArray[6]==itemArray[8]){
      setWiner(`${itemArray[6]} won`);
    }else if(itemArray[0]!="empty"&&  itemArray[0]==itemArray[3]&& itemArray[0]==itemArray[6]){
      setWiner(`${itemArray[0]} won`);
    }else if(itemArray[1]!="empty"&&  itemArray[1]==itemArray[4]&& itemArray[1]==itemArray[7]){
      setWiner(`${itemArray[1]} won`);
    }else if(itemArray[2]!="empty"&&  itemArray[2]==itemArray[5]&& itemArray[2]==itemArray[8]){
      setWiner(`${itemArray[2]} won`);
    }else if(itemArray[0]!="empty"&&  itemArray[0]==itemArray[4]&& itemArray[0]==itemArray[8]){
      setWiner(`${itemArray[0]} won`);
    }else if(itemArray[2]!="empty"&&  itemArray[2]==itemArray[4]&& itemArray[2]==itemArray[6]){
      setWiner(`${itemArray[2]} won`);
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
      {(winMsg)
      ?(
        <div>
          <h1 >  {winMsg} </h1>
        <Button  color='success' onClick={reloadGame}> Reset </Button>
        </div>
      )
      : (
        <div>
         <h1 className='heading'> {isCross ? ("cross") : ("circle")  }     turns</h1>
         <h2> {winMsg}</h2>
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
