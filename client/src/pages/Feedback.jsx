import React from "react";
import { Page, PageContent } from "grommet";
import HandymanFeedback from "../components/Order/HandymanFeedback";
import EmployerFeedback from "../components/Order/EmployerFeedback";
import { useLocation } from "react-router-dom";

const Feedback = () => {
  const state = useLocation().state;

  return (
    <Page kind="wide" pad="0 2em">
      <PageContent background="light" border={true} round="small">
        {state.accountType === 0 ? (
          <EmployerFeedback state={state} />
        ) : (
          <HandymanFeedback state={state} />
        )}
      </PageContent>
    </Page>
  );
};

export default Feedback;
