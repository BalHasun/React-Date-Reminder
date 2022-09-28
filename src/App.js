import { person } from './Data'
import DateCuont from './Components/DateCuont';
import DatesList from './Components/DatesList';
import DateAction from './Components/DateAction';

import {Container} from "react-bootstrap";

function App() {

  return (
    <div className="font color-body ">
      <Container className='py-5'>

        <DateCuont person={person}/>
        <DatesList person={person}/>
        <DateAction person={person}/>

      </Container>

    </div >
  );
}

export default App;
