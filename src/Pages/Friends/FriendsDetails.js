import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friendsDetails = useLoaderData();
    return (
        <div>
            <h1>Details of {friendsDetails.name}</h1>
            <h1>Phone Number {friendsDetails.phone}</h1>
        </div>
    );
};

export default FriendsDetails;