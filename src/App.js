import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { login, logout } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is:", authUser);

      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
          <div>
            <Banner />
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row
              title="Romance Movies"
              fetchUrl={requests.fetchRomanceMovies}
            />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
