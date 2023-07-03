const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    isFeatured: true,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-03-30",
    isFeatured: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeb_nvqdqknrhObwIgfFuL17PHx1G0gWPTSqIB1RRM&s",
  },
];

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getEventById(id) { //e2
  return DUMMY_EVENTS.find((event) => event.id === id);
}
