import { ModalRoute } from "../../utils";
import Signin from "./singin";
import Signup from "./singup";

export default function getModal(modal) {
  switch (modal) {
    case ModalRoute.SIGNIN:
      return <Signin />;
    case ModalRoute.SIGNUP:
      return <Signup />;
    default:
      return null;
  }
}