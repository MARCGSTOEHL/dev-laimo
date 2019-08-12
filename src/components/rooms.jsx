import React, { Component } from "react";
import { getDpd } from "./service/fakeDPDService";
import List from "./common/list";
import NavAppBar from "./common/navAppBar";

class Rooms extends Component {
  state = {
    rooms: [],
    address: []
  };

  componentDidMount() {
    //For leanring purposes
    console.log("DidMount - Rooms");

    const dpdId = this.props.match.params.prop_id;

    const dpd = getDpd(dpdId);
    if (!dpd) return this.props.history.replace("/not-found");

    this.setState({ rooms: dpd.rooms, address: dpd.address });
  }

  handleDelete = r => {
    const rooms = this.state.rooms.filter(i => i._id !== r);
    this.setState({ rooms });
  };

  handleChecked = room => {
    const rooms = [...this.state.rooms];
    const index = rooms.indexOf(room);
    console.log(room);
    rooms[index] = { ...rooms[index] };
    rooms[index].checked = !rooms[index].checked;
    this.setState({ rooms });
  };

  render() {
    //For leanring purposes
    console.log("Render - Rooms");

    const { match, history } = this.props;
    const { rooms, address } = this.state;

    console.log(rooms);

    return (
      <React.Fragment>
        <NavAppBar site_title="Räume Übersicht" history={history} />
        <List
          items={rooms}
          onDelete={this.handleDelete}
          onChecked={this.handleChecked}
        />
      </React.Fragment>
    );
  }
}

export default Rooms;
