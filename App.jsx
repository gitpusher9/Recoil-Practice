import { useRecoilValue, RecoilRoot } from 'recoil';
import { useMemo } from 'react';

import { NetworkAtom } from './atoms/networkatom';
import { MessageAtom } from './atoms/messageatom';
import { NotificationAtom } from './atoms/notificationatom';
import { JobsAtom } from './atoms/jobsatom';
import { TotalCount } from './atoms/totselector';


function App() {
  return (
    // Wrap the MainApp component with RecoilRoot because any place using Recoil state must be wrapped in RecoilRoot
    //in this case App was not wrapped inside recoil  root so we wrap MainApp with RecoilRoot
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}
function MainApp(){
  const networkcount = useRecoilValue(NetworkAtom);
  const messagecount = useRecoilValue(MessageAtom);
  const notificationcount = useRecoilValue(NotificationAtom);
  const jobcount = useRecoilValue(JobsAtom);
  const totalcount = useRecoilValue(TotalCount);

  /*const totalcount = useMemo(() => {
     return networkcount + messagecount + notificationcount + jobcount;
  }, [networkcount, messagecount, notificationcount, jobcount]);*/



  return(
      <div>
      <button>Home</button>

      <button>My Network ({networkcount >= 100 ? "99+" : networkcount})</button> 
      <button>Jobs ({jobcount >= 100 ? "99+" : jobcount})</button>
      <button>Messages({messagecount >= 100 ? "99+" : messagecount})</button>
      <button>Notifications({notificationcount >= 100 ? "99+" : notificationcount})</button>

      <button>Me ({totalcount})</button>
      {/*<button>Me ({totalcount})</button>*/}
      </div>
  )
}
export default App
