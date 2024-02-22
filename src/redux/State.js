let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 10 },
      { id: 3, message: "Bla", likesCount: 2 },
      { id: 4, message: "Hey", likesCount: 22 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" },
    ],

    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it-kamasutra" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
      { id: 6, message: "Yo" },
    ],
  },
  sitebar: {
    friends: [
      {
        name: "Andrew",
        avatar:
          "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        name: "Sasha",
        avatar:
          "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        name: "Sveta",
        avatar:
          "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
    ],
  },
};
export default state;
