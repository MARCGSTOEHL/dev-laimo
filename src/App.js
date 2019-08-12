import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Rooms from "./components/rooms";
import Dpds from "./components/dpds";
import DPD from "./components/dpd";
import Elements from "./components/elements";
import NotFound from "./components/not-found";
import { getDpds } from './components/service/fakeDPDService';

import "./App.css";

class App extends Component {
  state = {
    dpds:[]
  };
  
  componentDidMount() {
    this.setState({ dpds: getDpds()});
  }

  handleDelete = d => {
    const dpds = this.state.dpds.filter(i => i._id !== d);
    this.setState({ dpds });
  };

  handleChecked = dpd => {
    const dpds = [...this.state.dpds];
    const index = dpds.indexOf(dpd);
    console.log(dpd);
    dpds[index] = { ...dpds[index] };
    dpds[index].checked = !dpds[index].checked;
    this.setState({ dpds });
  };

  render() {
    const { dpds } = this.state;

    return (
      <main className="container">
        <Switch>
          <Route path="/properties/:prop_id/rooms/:room_id" component={Elements} />
          <Route path="/properties/:prop_id/rooms/" component={Rooms} />
          <Route path="/properties/:prop_id" component={DPD} />
          <Route
            path="/properties"
            render={props => (
              <Dpds
                dpds={dpds}
                onDelete={this.handleDelete}
                onChecked={this.handleChecked}
                {...props}
              />
            )}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/properties" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
