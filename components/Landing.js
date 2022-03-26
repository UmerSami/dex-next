import Image from 'next/image'
import kids from '../public/BabaAndKids.jpg'

const Landing = ()=> {
 return (<div class="grid place-items-center h-screen">
          <Image
  className="rounded-full"
  alt="kids"
  src={kids}
  layout="intrinsic"

/> 
        </div>
          );
}; 
export default Landing