import { NetworkAtom } from './networkatom';
import { MessageAtom } from './messageatom';
import { NotificationAtom } from './notificationatom';
import { JobsAtom } from './jobsatom';

import { selector } from 'recoil';

export const TotalCount = selector({
    key: 'TotalCount',   
    get: ({get}) =>{
        const networkcount = get(NetworkAtom);
        const messagecount = get(MessageAtom);
        const notificationcount = get(NotificationAtom);
        const jobcount = get(JobsAtom);

        return networkcount + messagecount + notificationcount + jobcount;
    }
})