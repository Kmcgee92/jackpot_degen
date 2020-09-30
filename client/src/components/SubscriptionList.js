import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SubscriptionList = () => {
    const { roomNames, jackpots } = useSelector(state => state.Jackpot.subs)

    return (
        <>
            <h4>My Card Rooms</h4>
            <ul>
                {roomNames.map((room, i) => 
                    <li key={room}>
                        <Link to={`/cardrooms/${jackpots[i].roomId}`}>{room}</Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default SubscriptionList;