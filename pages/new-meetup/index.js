// our-domain.com/new-meetup

import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
function NewMeetup() {
    const router = useRouter();
    const addMeetupHandler = async (eneteredMeetupData) => {
        console.log(eneteredMeetupData);
        //For local request to the server
        const response = await fetch('/api/new-meetup',
            {
                method: 'POST',
                body: JSON.stringify(eneteredMeetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const data = await response.json();
        console.log(data);
        router.replace('/');
    };
    return (
        <Fragment>
            <Head>
                <title>Add New Meetups</title>
                <meta name="description" content="Arrange meetups and know interesting people!" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    );
}

export default NewMeetup;