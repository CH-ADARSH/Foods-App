import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props)
        

        // creating state variable in class based component
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "hyderabad",
                avatar_url:"http://dummy-photo.com",
            }
        }
        
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/CH-ADARSH");
        const json = await data.json()
        
        this.setState({
            userInfo:json,
        })
        
        console.log(json)
    }
    render() {

        // destructuring 
        const { name, location ,avatar_url} = this.state.userInfo
        // 
        return (
            <div className="user-card">
                <h1>Name:{name}</h1>
                <h4>Location:{ location}</h4>
                <img src={avatar_url}></img>
                {/* <h4>Profile:{ avatar_url}</h4> */}
            </div>
            
        )
    }
}

export default UserClass