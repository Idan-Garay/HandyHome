import React from "react";
import { Page, PageContent } from "grommet";
import HandymanFeedback from "../components/Order/HandymanFeedback";
import EmployerFeedback from "../components/Order/EmployerFeedback";

const Feedback = ({ userType = 1 }) => {
  return (
    <Page kind="wide" pad="0 2em">
      <PageContent background="light" border={true} round="small">
        {userType === 1 ? <HandymanFeedback /> : <EmployerFeedback />}
      </PageContent>
    </Page>
  );
};

export default Feedback;
