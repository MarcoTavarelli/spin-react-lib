import { BeatLoader } from 'react-spinners';

const Loader = ({isLoading,color}:{isLoading:boolean,color:string}) => {
  return(
    <BeatLoader {...{color,isLoading}}/>
  )
}


export default Loader