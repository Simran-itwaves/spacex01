/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../../Component/Pagination/index";
import DetailModal from "../../Component/Modal";
import { fetchOneLaunchData } from "../../Redux/Reducer/Launches/launchesSlice";

export default function ListLaunchData({ query }) {
  const { launches } = useSelector((state) => state.launches);
  const dipatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = (id) => {
    dipatch(fetchOneLaunchData(id));
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalIsOpen]);
  return (
    <div>
      {Array.isArray(launches) && launches.length ? (
        <>
          <div className="d-flex row container justify-content-evenly mx-auto ">
            {launches?.map((launch) => (
              <div
                className="card my-4 p-0"
                style={{ width: "12rem" }}
                key={launch.id}
                role="button"
                onClick={() => openModal(launch.id)}
              >
                <img
                  src="https://media.timeout.com/images/105653190/image.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{launch.name}</h5>
                  <p className="card-text">{launch.status}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination query={query} />
        </>
      ) : (
        <div className="mt-5">no data found</div>
      )}
      <DetailModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}
