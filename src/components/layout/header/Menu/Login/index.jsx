import * as S from "@components/layout/header/Menu/style";
import { LOGIN } from "@assets/string";

const Login = ({onClick}) => {
  return <S.Button type="text" children={LOGIN} onClick={onClick} />;
}
export default Login;
