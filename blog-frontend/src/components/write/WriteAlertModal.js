import React from 'react';
import ModalTemplate from '../common/ModalTemplate';

const WriteAlertModal = ({
  visible,
  title,
  description,
  confirmText,
  onConfirm,
}) => {
  return (
    <ModalTemplate
      visible={visible}
      title="ㅇㅇ"
      description="ㅁㅁ"
      onConfirm={onConfirm}
    />
  );
};

export default WriteAlertModal;
