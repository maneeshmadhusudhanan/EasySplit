// context/groupContext.js
import React, { createContext, useEffect, useState } from 'react';

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groupsCount, setGroupsCount] = useState(0);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/group/getgroups');
        const data = await res.json();
        setGroups(data);
        setGroupsCount(data.length);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <GroupsContext.Provider value={{ groupsCount, groups }}>
      {children}
    </GroupsContext.Provider>
  );
};
