import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { BsYoutube, BsWikipedia } from "react-icons/bs";
import { MdArticle } from "react-icons/md";

Modal.setAppElement("#root");
export default function DetailModal({ modalIsOpen, closeModal }) {
  const { launch } = useSelector((state) => state.launches);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          padding: "0px",
          transform: "translate(-50%, -50%)",
          boxShadow: "1px 3px 1px #9E9E9E",
          border: "0px",
        },
      }}
      contentLabel="Example Modal"
    >
      <div className="card p-3">
        <div className="card-header d-flex justify-content-between">
          <h3>{launch?.name}</h3>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            <h5>&times;</h5>
          </button>
        </div>
        <div className="card-body">
          <p className="card-title">{launch?.details}</p>
          <p className="card-text">Launch date: {launch?.date_utc}</p>
          <p className="card-text">
            Success: {JSON.stringify(launch?.success)}
          </p>
          <p className="card-text">
            Reused: {JSON.stringify(launch?.fairings?.reused)}
          </p>
          <p className="card-text">
            recovered: {JSON.stringify(launch?.fairings?.recovered)}
          </p>
          <p>Upcoming : {JSON.stringify(launch?.upcoming)}</p>
          <a href={launch?.links?.webcast} className="px-1">
            <BsYoutube style={{ color: "red" }} />
          </a>
          <a href={launch?.links?.wikipedia} className="px-1">
            <BsWikipedia style={{ color: "black" }} />
          </a>
          <a href={launch?.links?.article} className="px-1">
            <MdArticle style={{ color: "black" }} />
          </a>
        </div>
      </div>
    </Modal>
  );
}
