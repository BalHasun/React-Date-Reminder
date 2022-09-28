import { person } from './Data/Data'
import DateCuont from './Components/DateCuont';
import DatesList from './Components/DatesList';
import DateAction from './Components/DateAction';

import {Container} from "react-bootstrap";
import { useEffect, useState } from 'react';

function App() {
  
  const [personData, setPersonData] = useState(person);

  // delet and show all data with click button
  const onDelete = () => setPersonData([])
  const onView = () => setPersonData(person)

  // delete all data when the page is loading
  useEffect(() => { setPersonData([]) },[])

  return (
    <div className="font color-body ">
      <Container className='py-5'>

        <DateCuont person={personData} />
        <DatesList person={personData } />
        <DateAction deleteData={onDelete} viewData={onView}/>

      </Container>

    </div >
  );
}

export default App;
