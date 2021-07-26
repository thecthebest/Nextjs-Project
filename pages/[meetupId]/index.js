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

export default MeetupDetails;