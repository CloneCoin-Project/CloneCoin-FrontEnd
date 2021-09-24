import * as S from "@components/layout/header/Menu/style";
import { LOGOUT } from "@assets/string";

const Logout = ({onClick}) => {
  return <S.Button type="text" children={LOGOUT} onClick={onClick} />;
}

export default Logout;
