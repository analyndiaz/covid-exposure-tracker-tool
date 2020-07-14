import React from "react";
import { Button } from "@material-ui/core";
import * as SocialInteractionService from "../../services/socialInteractionService";

const onGetAllSocialInteractions = () => {
  SocialInteractionService.getSocialInteractions().then((response) =>
    console.log(response)
  );
};

const Dashboard = () => {
  return (
    <div>
      <Button onClick={onGetAllSocialInteractions}>
        Get All Social Interaction
      </Button>
    </div>
  );
};

export default Dashboard;
