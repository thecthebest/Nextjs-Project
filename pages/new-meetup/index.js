// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
    const addMeetupHandler = (eneteredMeetupData) => {
        console.log(eneteredMeetupData);
    };
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
}

export default NewMeetup;