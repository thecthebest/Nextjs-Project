// our-domain.com/new-meetup

import { MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
    return (
        <MeetupDetail
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Val_Trupchun.jpg/800px-Val_Trupchun.jpg"
            title="swiss Apls"
            address="lucerne, Swiss"
            description="This is first stop"
        />
    );
}
//This should be exported if a page is dynamic
//getStaticProps is utilized
export async function getStaticPaths() {
    return {
        //tells whetere your paths array contains all the supported parameters values or just some
        //False:Contains all meetupId values and when something else is requested 404 is given
        //True:Doesn't contain all meetupId values & will be generated when requested
        fallback: false,
        paths: [
            //one object per verion of the [meetupId] page
            {
                params: {
                    meetupId: "m1"
                },
            },
            {
                params: {
                    meetupId: "m2"
                },
            },
        ]
    };
}
export async function getStaticProps(contetx) {
    const meetupId = contetx.params.meetupId;
    const client = await MongoClient.connect('');
    const db = client.db();
    const meetupsCollection = db.collection('myFirstDatabase');
    const result = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    client.close();
    console.log(meetupId, result);

    return {
        props: {
            meetupData: result
        }
    };
}
export default MeetupDetails;