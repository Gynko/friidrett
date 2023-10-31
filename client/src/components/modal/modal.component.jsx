import { useContext } from "react";
import { UserContext } from "../../App";
import Heading from "../heading/heading.component";
import "./modal.styles.css";

export default function Modal({ children, onClose, title }) {
  const { visibleModal, setVisibleModal } = useContext(UserContext);

  function closeModal() {
    setVisibleModal(false);
  }

  return (
    visibleModal && (
      <div className="modal-fullpage-container">
        <div className="modal-children-container">
          <Heading text={title} />
          {children}
          <button className="modal-close-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    )
  );
}
