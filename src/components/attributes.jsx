import React, { Component } from "react";
import { getRoom } from "./service/fakeDPDService";
import List from "./common/list";
import NavAppBar from './common/navAppBar';

class Attributes extends Component {
  state = {
    elements: []
  };

  componentDidMount() {
    //For leanring purposes
    console.log("DidMount - Elements");

    const dpdId = this.props.match.params.prop_id;
    const roomId = this.props.match.params.room_id;

    const room = getRoom(roomId, dpdId);
    console.log("export getRoom", room);

    if (!room) return this.props.history.replace("/not-found");

    this.setState({ elements: room.elements });
  }

  handleDelete = r => {
    const elements = this.state.elements.filter(i => i._id !== r);
    this.setState({ elements });
  };

  handleChecked = room => {
    const elements = [...this.state.elements];
    const index = elements.indexOf(room);
    console.log(room);
    elements[index] = { ...elements[index] };
    elements[index].checked = !elements[index].checked;
    this.setState({ elements });
  };

  render() {
    //For leanring purposes
    console.log("Render - elements");

    const { match, history } = this.props;
    const { elements } = this.state;

    return (
      <React.Fragment>
        <NavAppBar site_title="Übersicht Elemente" history={history} />
        <List
          items={elements}
          onDelete={this.handleDelete}
          onChecked={this.handleChecked}
        />
      </React.Fragment>
    );
  }
}

export default Attributes;
