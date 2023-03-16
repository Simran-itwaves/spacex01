import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Loader() {
  return (
    <div className="spinner-border mt-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
