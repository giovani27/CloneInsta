import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Globalstyles from "./styles/Globalstyles";

import { DropdownProvider } from "./Provider/ProviderData";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import Inbox from "./Pages/Inbox/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <DropdownProvider>
          <Route path="/" exact={true} component={App} />
          <Route path="/explore" component={Explore} />
          <Route path="/inbox" component={Inbox} />

          <Globalstyles />
        </DropdownProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
