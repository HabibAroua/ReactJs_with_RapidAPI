import React , {Component} from 'react'
import FacebookLogin from 'react-facebook-login'
import Navbar from "./Navbar";
import Content from "./table/Content";
import './css/facebook.css'

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
        //console.log(response);
        this.setState
        (
            {
                isLoggedIn : true ,
                userID : response.userID ,
                name : response.name ,
                email : response.email ,
                picture : response.picture.data.url
            }
        )
    }

    componentClicked = () => console.log("Clicked");
    render()
    {
        let fbContent;

        if(this.state.isLoggedIn == true)
        {
            fbContent =
                (
                    <div>
                        <div style=
                                 {
                                     {
                                         width : '400px' ,
                                         margin : 'auto' ,
                                         background : '#f4f4f4' ,
                                         padding : '20px'
                                     }
                                 }
                        >
                            <img src={this.state.picture} alt={this.state.name} />
                            <h2>
                                Welcome {this.state.name}
                            </h2>
                            Email : {this.state.email}
                        </div>
                        <div>
                            <Content/>
                        </div>
                    </div>
            )
        }
        else
        {
            fbContent=(
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon"/>
                        </div>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                                <input type="text" id="password" className="fadeIn third" name="login"
                                       placeholder="password" />
                                    <input type="submit" className="fadeIn fourth" value="Log In" />
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <FacebookLogin
                        appId="507398013198296"
                        autoLoad = {true}
                        fields = "name,email,picture"
                        onClick = {this.componentClicked}
                        callback = {this.responseFacebook}
                    />
                </div>
            );
        }
        return (
            <div>
                <Navbar/>
                {fbContent}
            </div>
        );
    }
}
