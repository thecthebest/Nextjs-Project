// our-domain.com/new-meetup

import { useRouter } from "next/dist/client/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
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
    };
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
}

export default NewMeetup;
