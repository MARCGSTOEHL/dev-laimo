import React from "react";
import { List, Users, Box, User } from "react-feather";
import { Link } from "react-router-dom";

const FeatureCard = props => {
  const { label, feature, description, linkTo } = props;

  const featureIcons = { room: Box, tenant: Users, issueList: List };

  // JSX rendering dynamic componant
  // https://medium.com/@TranscendMikey/react-gotcha-dynamically-rendering-components-with-jsx-b53fc07f63ca
  const $renderFeatureIcon = featureIcons[feature];

  return (
  <Link to={`${window.location.pathname}/${linkTo}`}>
    <div className="card text-white bg-primary mb-0" style={{ width: "100%" }}>
      <div className="card-body">
        <p className="card-text text-center">
          <$renderFeatureIcon size={100} />
        </p>
      </div>
      <div className="card-footer text-center">
        <h6>{label}</h6>
        {description && <p>{description}</p>}
      </div>
    </div>
</Link>
  );
};

export default FeatureCard;
