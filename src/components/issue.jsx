import React from 'react';

const Issue = props => {
    console.log(props.data);
    return props.data.map(item => {
        return (
            <div>
                <li>
                    <div>{item.title}</div>
                    <div>{item.number} {item.user.login}</div>
                </li>
            </div>
        )
    });
}

export default Issue;