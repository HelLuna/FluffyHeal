import './modal.css'

import { ModalRoute } from '../../utils'
import getModal from './get-modal';
import { useSelector } from 'react-redux';


export default function Modal() {
  let modal = useSelector((state) => state.pages.modal);

  return modal === ModalRoute.NONE ?
    null :
    (<div class="modal">
      {getModal(modal)}
    </div>);
}
