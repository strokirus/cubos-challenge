import React from 'react';
import { object, bool, func, string } from 'prop-types';
import Modal from 'react-responsive-modal';

const ModalComponent = ({ open, onCloseModal, title, info }) => (
  <Modal
    open={open}
    onClose={onCloseModal}
  >
    <h2
      className="title-modal"
    >
      {title}
    </h2>

    {Object.keys(info).map((s, i) => {
      if (s !== 'name' && typeof info[s] !== 'object') {
        return (<p key={`info-${i}-${s}`}>{`${s}: ${info[s]}`}</p>);
      } else if (typeof info[s] === 'object') {
        return (Object.keys(info[s]).map(e => (
          <p key={`info-${i}-${s}`}>{`${e}: ${info[s][e]}`}</p>
        )));
      }

      return ('');
    })}
  </Modal>
);

ModalComponent.propTypes = {
  open: bool,
  onCloseModal: func,
  title: string,
  info: object,
};

ModalComponent.defaultProps = {
  open: false,
  onCloseModal: () => {},
  title: '',
  info: { },
};

export default ModalComponent;
