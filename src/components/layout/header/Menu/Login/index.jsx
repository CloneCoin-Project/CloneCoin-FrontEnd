import { useModal } from '@hooks';

import * as S from '@components/layout/header/Menu/style';
import { LOGIN } from '@assets/string';

const Login = () => {
  const { isModalVisible, handleToggle } = useModal();
  return (
    <>
      <S.Button type="text" children={LOGIN} onClick={handleToggle} />
    </>
  );
};
export default Login;
