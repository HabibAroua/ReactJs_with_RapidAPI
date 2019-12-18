import React , {Component} from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component
{

    state=
    {
        isLoggedIn : false,
        userID : '',
        name : '',
        email : '',
        picture : ''
    }
    render()
    {
        return (
            <div>
                <h1>First Part</h1>
            </div>
        );
    }
}
