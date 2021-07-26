import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const Dummy_Meetup = [
    {id:"m1", title: "First Meetup", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Val_Trupchun.jpg/800px-Val_Trupchun.jpg", address:"switzerland", description:"drink"},
    {id:"m2", title: "First Meetup", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Lauterbrunnental_train.jpg/800px-Lauterbrunnental_train.jpg", address:"austria", description:"drink"},
];
function HomePage() {
    return (
        <Fragment>
            <Layout>
                <MeetupList meetups={Dummy_Meetup}/>
            </Layout>
        </Fragment>
    );
}

export default HomePage;