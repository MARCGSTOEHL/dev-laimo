import React, { Component } from "react";
import { getDpd } from "./service/fakeDPDService";
import FeatureCard from "./common/featureCard";
import NavAppBar from "./common/navAppBar";
import AppBar from "@material-ui/core/AppBar";

class DPD extends Component {
  state = {
    dpd: { address: {}, owner: {}, rooms: {}, tenant: {} }
  };

  componentDidMount() {
    //For leanring purposes
    console.log("DidMount - DPD");
    const dpdId = this.props.match.params.prop_id;

    const dpd = getDpd(dpdId);
    if (!dpd) return this.props.history.replace("/not-found");

    this.setState({ dpd });
  }

  render() {
    //For leanring purposes
    console.log("Render - DPD");

    const { match, history } = this.props;
    const { dpd } = this.state;

    return (
      <React.Fragment>
        <NavAppBar
          site_title={`${dpd.address.street} ${dpd.address.streetnr}`}
          history={history}
          position="fixed"
        />
        <div className="card">
          <img
            src="https://source.unsplash.com/800x250/?apartment,door"
            className="card-img-top"
          />
          <div className="card-header">
            <h5 className="card-title">
              {dpd.address.street}, {dpd.address.streetnr} <br />{" "}
              {dpd.address.zipcode} {dpd.address.city} ({dpd.address.region})
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="card-columns">
              <div class="card bg-secondary text-white ">
                <div class="card-body">
                  <h6>
                    {dpd.owner.name} {dpd.owner.lastname}
                  </h6>
                  <div class="text-white-50 small">#Eigentümer</div>
                </div>
              </div>
              <div class="card bg-secondary text-white ">
                <div class="card-body">
                  <h6>{dpd.EGID}</h6>
                  <div class="text-white-50 small">#EGID</div>
                </div>
              </div>
              <div class="card bg-secondary text-white ">
                <div class="card-body">
                  <h6>7.5</h6>
                  <div class="text-white-50 small">#Anzahl Zimmer</div>
                </div>
              </div>
              <div class="card bg-secondary text-white ">
                <div class="card-body">
                  <h6>MFH</h6>
                  <div class="text-white-50 small">#Typ</div>
                </div>
              </div>
              <div class="card bg-secondary text-white ">
                <div class="card-body">
                  <h6>
                    {dpd.tenant.name} {dpd.tenant.lastname}
                  </h6>
                  <small>
                    {dpd.tenant.email}
                    <br />
                    {dpd.tenant.phone}
                  </small>
                  <div class="text-white-50 small">#Mieter</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div class="card-columns">
              <FeatureCard label="Räume" feature="room" linkTo="rooms" />
              <FeatureCard
                label="Mängelliste"
                feature="issueList"
                linkTo="issuelist"
              />
              <FeatureCard label="Mieter" feature="tenant" linkTo="tenant" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DPD;
