# [Sentify](https://github.com/t007rushi/Sentify)

<img src="https://user-images.githubusercontent.com/61598260/178214435-fbebf24a-eb17-4c21-a0c1-73b04d668ef8.png" width="100"> This is Spotify Spoof Assignment Build with REACT

## Tech Stack

- React
- Grommet component Library
- Redux Toolkit
- React-router-DOM

## How to Start on local system

Clone the project

```js
  git clone https://github.com/t007rushi/Sentify.git
```

Go to the project directory

```js
  cd Sentify
```

Install dependencies

```js
  npm install
```

Start the server in Development mode

```js
  npm run start
```

Start the server in Production mode

```js
  npm run build
```

```js
  npm install -g serve
  serve -s build
```

## Pages

- Landing Page Frontend Authentication
- Home Page with below Sections
  - Released This Week Songs
  - Featured Playlists
- Browse Genre
- Search for music

# While Building the App!

1. ## How much logic did I offloaded out of the UI components?

- Created `SongsCard` and `GenreCard`, mapped the data out of array/collection and passing down the specific data as prop for a particular card
- There is Case while making Playlists/Songs Rows code is repetative,so followed `DRY` (Don't Repeat Yourself) Principal
  so offload the data into `PlaylistRow` and passed the props to this component making `PlayLists` Component More Readable, Modular and Reusable.
- Instead of repeating the Fixed component (Header, Sidebar, Footer) for each Page
  Just offloaded the Changing part i.e. MainComp and passed the Whole Data as special `{Children} Prop` making use of `Higher Order Component (HOC) Pattern`
- For Footer made 3 sections
  1. Song details
  2. Player with controls and
  3. Volume and extra options

2. ## How did I structured my app?

- While Structuring App Code is look-like chaos and unmodular at first so Seperated out the layout Component and then `Compose` them into Single `Home` Page Component.

Following tree Summerizes the Structure of APP

![nodeTree](https://user-images.githubusercontent.com/61598260/178158214-bde2477e-0d8d-43e9-8c80-ae44cf0b6198.jpg)

3. ## What I did it made the use of Redux as simple as possible?

- Started with spotify Auth, thought of making authSlice but later dropped and stored it in `window.localstorage`

  Reasons
  - There is no option for signup or custom login page it's done by Spotify Auth API under the hood
  - so no need to make another slice and crowding the store for single token to use over the app lifecycle
- Async calls using thunk and just added loading as boolean flag to signal data is fetched or in pending/rejected state

# DEMO

## Home Page with playlists and songs

![sentify-home](https://user-images.githubusercontent.com/61598260/178163746-d88c2608-3277-4d8a-bb96-ab1880fe229b.JPG)


## Browse Genre Section

![sentify-browse](https://user-images.githubusercontent.com/61598260/178163738-f9397fa6-b4cd-48f2-bb87-d92a02b91645.JPG)


## Search Page

![sentify-search](https://user-images.githubusercontent.com/61598260/178163731-5bf1136e-b4df-4530-b7bd-4b45eefbc68a.JPG)

![syntify-top](https://user-images.githubusercontent.com/61598260/178163581-1228c63e-c292-4fd2-8dbe-090f9bf4e666.JPG)


## Author

- [@t007rushi](https://github.com/t007rushi)

## Acknowledgements

- [Grommet component Library](https://v2.grommet.io/)

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rushikeshtarapure/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Neo_MonkStar)
