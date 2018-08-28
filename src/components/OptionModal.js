import React from 'react';
import ReactModal from 'react-modal'

const OptionModal = (props) => (
  <ReactModal
  isOpen = {!!props.selectedOption}
  ariaHideApp={false}
  onRequestClose = {props.handleClearOptionModal}
  closeTimeoutMS={300}
  className="modal">
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className= "button" onClick = {props.handleClearOptionModal}> totally worth it!</button>
  </ReactModal>
);
export default OptionModal;