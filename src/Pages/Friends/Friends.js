import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div className='padding'>
            <div className='friendtop'><h1>I Have Some Friends. Quantity Of Friends {friends.length}</h1></div>
            <div className='FriendsDiv'>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;