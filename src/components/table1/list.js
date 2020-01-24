import React, { Component } from "react";
import Tbody from './tbody';
import Navbar from './Navbar';
import Header from './header';

export default class List extends Component
{
    state =
    {
        posts: []
    };

    componentDidMount()
    {
        const axios = require("axios");
        axios
        (
            {
                "method":"GET",
                "url":"https://public-holiday.p.rapidapi.com/2019/US",
                "headers":
                {
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"public-holiday.p.rapidapi.com",
                    "x-rapidapi-key":"8d4e6f2fefmsh7961b6c967ce187p1614b1jsn994ca1be3f69"
                }
            }
        )
        .then
        (
            (response)=>
            {
                    console.log(response.data)
                    //console.log(response.data[2])
                    this.setState
                    (
                        {
                            posts: response.data
                        }
                    )
            }
        )
        .catch
        (
            (error)=>
            {
                console.log(error)
            }
        )
    }
    render()
    {
        const {posts} = this.state
        const ListOfPost = posts.map(post=>
        {
            return(
                <Tbody p={post}/>
            )
        })
        return (
            <div>
                <Navbar/>
                <table className="table">
                    <thead className="thead-dark">
                        <Header />
                    </thead>
                    {ListOfPost}
                </table>
            </div>
        );
    }
}
