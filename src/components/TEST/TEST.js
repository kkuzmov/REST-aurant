import { Circle, Heart, Ellipsis } from 'react-spinners-css';
//using bit
function Test(){
    return(
        <div>
          <Ellipsis color="#513C2C" size={150}/>
          {/* <Circle color="#be97e8" size={200} /> //size prop is number in pixel */}
          {/* <Heart color={getRandomColor()} /> */}
        </div>
      )
}
export default Test;
   