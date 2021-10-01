import { useState, useCallback } from 'react';

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggle = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

  return {
    isModalVisible,
    handleToggle,
  };
};

export default useModal;
