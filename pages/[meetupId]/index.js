// our-domain.com/new-meetup
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Fragment } from "react";
function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}
//This should be exported if a page is dynamic
//getStaticProps is utilized
export async function getStaticPaths() {
    const client = await MongoClient.connect('');
    const db = client.db();
    const meetupsCollection = db.collection('myFirstDatabase');
    const result = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        //tells whetere your paths array contains all the supported parameters values or just some
        //False:Contains all meetupId values and when something else is requested 404 is given
        //True:Doesn't contain all meetupId values & will be generated when requested
        fallback: false,
        paths: result.map((item) => {
            return { params: { meetupId: item._id.toString() } }
        })
    };
}
export async function getStaticProps(contetx) {
    const meetupId = contetx.params.meetupId;
    const client = await MongoClient.connect('');
    const db = client.db();
    const meetupsCollection = db.collection('myFirstDatabase');
    const result = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    client.close();
    console.log(meetupId, result);

    return {
        props: {
            meetupData: {
                id: result._id.toString(),
                title: result.title,
                address: result.address,
                image: result.image,
                description: result.description
            }
        }
    };
}
export default MeetupDetails;