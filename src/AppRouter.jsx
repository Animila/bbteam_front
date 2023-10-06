import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotificationsPage from "./pages/NotificationsPage";
import ProjectsPage from "./pages/ProjectsPage";
import BookmarksPage from "./pages/BookmarksPage";
import SearchPage from "./pages/SearchPage";
import AccountPage from "./pages/AccountPage";
import TitlePage from "./pages/TitlePage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ChapterPage from "./pages/ChapterPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/notification">
        <NotificationsPage />
      </Route>
      <Route path="/projects">
        <ProjectsPage />
      </Route>
      <Route path="/bookmarks">
        <BookmarksPage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/account">
        <AccountPage />
      </Route>
      <Route exact path="/titles/:id">
        <TitlePage />
      </Route>
      <Route exact path="/titles/:id/chapter/:chapter_id">
        <ChapterPage />
      </Route>
      <Route path="/error">
        <ErrorPage />
      </Route>

      <Redirect to="/error" />
    </Switch>
  );
};

export default AppRouter;
