import Button from '../../../components/Button';
import Text from '../../../components/Text';

import { useState } from "react";
  
const Jestbtn = () => {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div className="App">
      <Text toggle={toggle} displayTxt="GeeksForGeeks"/>
      <Button setToggle={setToggle} btnTxt="Toggle Text"/>
    </div>
  );
}
  
export default Jestbtn;