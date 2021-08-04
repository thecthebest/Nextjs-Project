import { MongoClient } from "mongodb";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React meetups!"/>
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}
//************************************* */
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
    //     //Always need to return an object
    const client = await MongoClient.connect('');
    const db = client.db();
    const meetupsCollection = db.collection('myFirstDatabase');
    const result = await meetupsCollection.find().toArray();
    client.close();

    const data = result.map((item) => {
        return {
            id: item._id.toString(),
            title: item.title,
            address: item.address,
            description: item.description,
            image: item.image
        };
    });
    console.log(data);
    return {
        //Should have
        props: {
            meetups: data
        },
        //Auto generate every seconds if requests recevied
        //Ideal if data change frequently
        //This unclocks a feature called- 
        //incremental static generation
        //No need to re-deploy or build for data changes
        revalidate: 1
    };
}


//************************************* */
//Re-generate page for every incomming request
//After deployment
// export async function getServerSideProps(contetx) {
//     //run any code here will run on server
//     //Can run any operation that should not 
//     //-be exposed to the users

//     //Acess to imcoming request
//     const req = contetx.req;
//     const res = contetx.res;

//     //Always need to return an object
//     return {
//         props: {
//             Dummy_Meetup
//         }
//     };
// }
export default HomePage;

// getStaticProps() 
//VS 
//getServerSideProps(contetx)

//When access to request status is no needed
//Data that is not always changing

//Guranteed to run for every request
//App may be slow you may have to wait for page generation
//When access to request status is needed
////Data that is always changing