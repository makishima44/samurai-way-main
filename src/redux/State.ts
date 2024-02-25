type MessagesType = {
  id: number;
  message: string;
};

type DialogType = {
  id: number;
  name: string;
  avatar: string;
};

type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};

type FriendsType = {
  name: string;
  avatar: string;
};

type ProfilePageType = {
  posts: Array<PostsType>;
};

type DialogPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessagesType>;
};

type SitebarType = {
  friends: Array<FriendsType>;
};

type RootStateType = {
  dialogs: any;
  messages: any;
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sitebar: SitebarType;
};

let state: RootStateType = {
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
      {
        id: 1,
        name: "Dimych",
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        id: 2,
        name: "Andrey",
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        id: 3,
        name: "Sveta",
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        id: 4,
        name: "Sasha",
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        id: 5,
        name: "Victor",
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        id: 6,
        name: "Valera",
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
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
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        name: "Sasha",
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
      {
        name: "Sveta",
        avatar: "https://papik.pro/uploads/posts/2023-03/1678233248_papik-pro-p-avatarki-malenkie-risunki-7.jpg",
      },
    ],
  },
  dialogs: undefined,
  messages: undefined
};
export default state;
