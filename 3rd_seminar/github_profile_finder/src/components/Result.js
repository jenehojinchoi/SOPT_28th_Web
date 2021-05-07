import React from "react";
import UserCard from "./UserCard/UserCard";

const Result = ({ userState }) => {
  const { status, data } = userState;

  switch (status) {
    case "pending":
      return <div>Loading...</div>;
    case "resolved":
      return <UserCard data={data} />;
    case "rejected":
      return (
        <div>User Not Found</div>
      );
    case "idle":
    default:
      return <div></div>;
  }
};

export default Result;