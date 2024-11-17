
import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import "./AccessDeniedPage.css";

const AccessDeniedPage = () => {

  return (
    <div className="access-denied-container">
      <h2 className="access-denied-message">
        Please login to access this resource
      </h2>
      <Link href='/login'>
        <Button
          variant="contained"
          className="access-denied-button"
        >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default AccessDeniedPage;
