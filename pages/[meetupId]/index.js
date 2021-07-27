// our-domain.com/new-meetup

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

    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Val_Trupchun.jpg/800px-Val_Trupchun.jpg",
                id: meetupId,
                title: "Starting point",
                address: "Lucern, Swiss Alps",
                description: "Amazing view"
            }
        }
    };
}
export default MeetupDetails;