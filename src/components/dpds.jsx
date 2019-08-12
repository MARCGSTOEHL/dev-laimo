import React, { Component } from "react";
import ListDPD from "./common/listDPD";
import NavAppBar from "./common/navAppBar";

class Dpds extends Component {
  render() {
    const { dpds, onDelete, onChecked } = this.props;

    return (
      <React.Fragment>
      <NavAppBar site_title="Übersicht Liegenschaften" menu={true} search={true}/>
        <ListDPD items={dpds} onDelete={onDelete} onChecked={onChecked} />
      </React.Fragment>
    );
  }
}

export default Dpds;
