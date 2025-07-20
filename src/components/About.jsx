import User from "./User";
import UserClass from "./UserClass";

const About = ()=>  {
    return (
        <div>
            <h1>About</h1>
            <h2>this is about section</h2>
            {/* <User /> */}
            <UserClass name={"my name is XYZ"} location={"Hyderabad"} contact={" 7349287943"} />
        </div>
    )
}

export default About;