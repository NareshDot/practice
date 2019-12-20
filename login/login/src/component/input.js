import React from 'react';
import axios from 'axios';

export default class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            users: []
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        }, () => {
            // console.log(this.state)
        })

    }

    handleSearch = (e) => {

        let query = this.state.input
        const data = []

        axios.get(`http://localhost:3030/api/users/findAllUsers/?query=${query}`)
            .then((res) => {
                data.push(res.data)
                this.setState({
                    users: data
                })
                // console.log("get user", this.state.users[0])
            }).catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { users } = this.state
        console.log("users ren", users)
        const getUsers = users.map(item => {
            return <li>{item.username}</li>
        });
        console.log("getUsers", getUsers)
        return (
            <div>
                <input onChange={this.handleChange} className="form-control" type="text" placeholder="Search User" />
                <br />
                <button onClick={this.handleSearch} className="btn btn-primary">Search</button>
                <br />
                {getUsers}
            </div>
        )
    }
}