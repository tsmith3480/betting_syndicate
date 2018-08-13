import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

export default class Modal extends Component {
  render() {
    const { isOpen, type, children, closeModal } = this.props
    return (
      <ReactModal isOpen={isOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <div className={`${type || 'default'}-modal`}>
          {children}
        </div>
      </ReactModal>
    )
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.7)'
  }
}

const { bool, string, func } = PropTypes

Modal.propTypes = {
  isOpen: bool.isRequired,
  type: string,
  closeModal: func.isRequired,
}