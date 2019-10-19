import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui comments">
      <ApprovalCard>
        <CommentDetail
          author="A1"
          timeAgo="Today at 4:30 PM"
          comment="1st comment"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="A2"
          timeAgo="Today at 5:30 PM"
          comment="2nd comment"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
