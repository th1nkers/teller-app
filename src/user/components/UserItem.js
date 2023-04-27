import React from 'react';
import './UserItem.css';
import Avatar from '../../shared/component/UIElements/Avatar';
import Card from '../../shared/component/UIElements/Card';
import { Link } from 'react-router-dom';

const UserItem = props => {
    return (
        <li className='user-item'>
            <Card className="user-item__content">
                <Link to={`/${props.id}/blogs`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.blogCount} {props.blogCount === 1 ? 'Blog' : 'Blogs'}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}

export default UserItem