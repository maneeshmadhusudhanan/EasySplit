import React, { createContext, useState, useEffect } from 'react';

export const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [friendsCount, setFriendsCount] = useState(0);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/friend/getFriends');
        const data = await res.json();
        setFriends(data);
        setFriendsCount(data.length);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };
    fetchFriends();
  }, []);

  return (
    <FriendsContext.Provider value={{ friends, friendsCount, setFriends }}>
      {children}
    </FriendsContext.Provider>
  );
};
