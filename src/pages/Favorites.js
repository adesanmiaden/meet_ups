import React from "react";
import Card from "../components/ui/Card";
import MeetupItem from "../components/meetups/MeetupItem";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function FavoritesPage() {
  return (
    <section>
      {DUMMY_DATA.map((data) => 
        <MeetupItem 
        key={data.id}
        id={data.id}
        image={data.image}
        title={data.title}
        description={data.description}
        address= {data.address}
        />
      )}
    </section>
  );
}

export default FavoritesPage;
