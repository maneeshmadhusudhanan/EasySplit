import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Home from '../Dashpages/User/home';
import Profile from '../Dashpages/User/profile';
import Groups from '../Dashpages/Group/groups';
import Friends from '../Dashpages/Friends/friends';
import Expenses from '../Dashpages/Friends/ExpensesFriend';
import Settings from '../Dashpages/User/settings';
import AddFriend from '../Dashpages/Friends/addfriend';
import ExpenseGroup from '../Dashpages/Group/expenseGroup';
import FriendProfile from '../Dashpages/Friends/profile';
import Groupprofile from '../Dashpages/Group/profile';
import UpdateFriend from '../Dashpages/Friends/updateFriends';
import AddGroup from '../Dashpages/Group/addGroup'; 
import UpdateGroup from '../Dashpages/Group/updateGroup';
import { FriendsProvider } from '../../context/friendContext';
import { GroupsProvider } from '../../context/groupContext'; 

const Dashboard = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="ml-[10%]  mt-3 p-4 w-screen h-[1118px] bg-white">
          <FriendsProvider>
            <GroupsProvider> 
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/getfriends" element={<Friends />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/addfriend" element={<AddFriend />} />
                <Route path="/addExpense" element={<ExpenseGroup />} />
                <Route path="/friendprofile/:id" element={<FriendProfile />} />
                <Route path="/groupprofile/:id" element={<Groupprofile />} />
                <Route path="/updateFriend/:id" element={<UpdateFriend />} />
                <Route path="/updateGroup/:id" element={<UpdateGroup />} /> 
                <Route path="/addGroup" element={<AddGroup />} /> 
              </Routes>
            </GroupsProvider>
          </FriendsProvider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
