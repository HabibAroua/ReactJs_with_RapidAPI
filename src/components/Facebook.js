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

    responseFacebook = response =>
    {
        console.log(response);
    }

    componentClicked = () => console.log("Clicked");
    render()
    {
        let fbContent;

        if(this.state.isLoggedIn == true)
        {
            fbContent = null;
        }
        else
        {
            fbContent=(
                <FacebookLogin
                    appId="507398013198296"
                    autoLoad = {true}
                    fields = "name,email,picture"
                    onClick = {this.componentClicked}
                    callback = {this.responseFacebook}
                />
            );
        }
        return (
            <div>
                {fbContent}
            </div>
        );
    }
}
