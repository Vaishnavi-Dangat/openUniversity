import React, { useEffect,useState } from 'react';
import "../App.css";
import { Modal} from 'react-bootstrap';
import Register from './Register';


const UpdateModal=(props)=>{
    const [show,setShow]=useState(false);
    useEffect(() => {
        setShow(props.showUpdateModal);
    },[props.showUpdateModal]);
     
    return(
      <Modal show={show}  onHide={()=>setShow(!show)}>
         <Modal.Body>
          <Register size="12" updateId={props.update_id} />
         </Modal.Body>
      </Modal>
    );
}
export default UpdateModal;