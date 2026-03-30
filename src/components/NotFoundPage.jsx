import React from "react";
import { GoAlertFill } from "react-icons/go";

const NotFoundPage = () => {
  return (
    <div>
      <GoAlertFill />
      <h1>404</h1>
      <p>Page Not Found</p>
      <button>Back To Home</button>
    </div>
  );
};

export default NotFoundPage;
