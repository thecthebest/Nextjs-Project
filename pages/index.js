import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
const Dummy_Meetup = [
    { id: "m1", title: "First Meetup", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Val_Trupchun.jpg/800px-Val_Trupchun.jpg", address: "switzerland", description: "drink" },
    { id: "m2", title: "First Meetup", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Lauterbrunnental_train.jpg/800px-Lauterbrunnental_train.jpg", address: "austria", description: "drink" },
];
function HomePage(props) {
    return (
        <Fragment>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}

//Page component is pre-rendered when app is built(after development)
//After deployment the page does not change by default


// Works only in components file inside pages folder
//For data fecthing
//Executed during pre-rendering process
//This function is called before component and 
//can be used to prepare data for this page

//any code written here will never end up to client side
//Never executes on client side, including server
export async function getStaticProps() {
    //Always need to return an object
    return {
        //Should have
        props: {
            meetups: Dummy_Meetup
        }
    };  
}
export default HomePage;