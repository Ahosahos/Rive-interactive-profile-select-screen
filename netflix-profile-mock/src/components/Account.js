import React from 'react';
import {Avatar} from '../styles/__styledComponents/Account';

const Account = ({name, backgroundColor}) => {
    return (
        <div className='account-container'>
            <Avatar background={backgroundColor} className="account-avatar"/>
            <div className='account-name'>{name}</div>
        </div>
    )
}

export default Account;