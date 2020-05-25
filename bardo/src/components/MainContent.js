import React from "react";
import ReactDOM from "react-dom";
import HeadMainContent from "./HeadMainContent"
import AprMainContent from "./AprMainContent"

function MainContent() {
  return (
    <div id="maincont" className="pb-1 pt-1 pr-1 pl-1">
      <HeadMainContent />
      <AprMainContent />
    </div>
  );
}

export default MainContent;
