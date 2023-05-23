import user from 'path/to/user.json';
import {Profile} from './Profile/Profile';
import data from 'path/to/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from 'path/to/friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes} /> 
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
        
  );
};
