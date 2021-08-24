import React, { useState,useEffect} from 'react';
import "../App.css";
import {NavLink} from  "react-router-dom";
import UpdateModal from "./UpdateModal";

const  UserList=()=>{
 const [localStorageData,setLocalStorageData]=useState([]);  
 const [showUpdateModal,setShowUpdateModal]=useState(false);
 const [update_id,setUpdateId]=useState(null);
useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("studentRegister"));
    console.log(data);
    if(data!=null){
        setLocalStorageData(data);
    }
    else{
     setLocalStorageData([]);
    }    
},[])
   
const deleteData=(delete_id)=>{
if(window.confirm("Are you sure, do you want to delete")){
 let tempdata=JSON.parse(localStorage.getItem("studentRegister"));
 let newData=tempdata.filter((data,id)=>{
     return id!=delete_id;
 })
 localStorage.setItem("studentRegister",JSON.stringify(newData));
 setLocalStorageData(newData);
 }
}

 return (

          <div className="col-12">
                    <div className="row m-2">
                      {
                        localStorageData.length==0
                         ?
                         <h3 className="text-center">Nothing to show...</h3>
                          :
                          localStorageData.map((user,id)=>{
                              return (
                                <div key={id} className="col-md-8 p-md-none userDiv my-3 mx-auto">
                                   <h6>Name:<span className="mx-1"></span>{user.name}</h6>
                                   <h6>Date Of Birth:<span className="mx-1"></span>{user.dob}</h6>
                                   <h6>Address:<span className="mx-1"></span>{user.address}</h6>
                                   <h6>Hobbies:<span className="mx-1"></span>
                                       {
                                        user.hobbies.reading!=""?user.hobbies.reading+",":null 
                                       }
                                       {
                                        user.hobbies.gaming!=""?user.hobbies.gaming+",":null  
                                       }
                                       {
                                        user.hobbies.drawing!=""?user.hobbies.drawing+",":null 
                                       }
                                       {
                                        user.hobbies.traveling!=""?user.hobbies.traveling+",":null  
                                       }
                                       {
                                        user.hobbies.extra!=""?user.hobbies.extra+"," :null
                                       }
                                    </h6>
                                   <h6>Gender:<span className="mx-1"></span>{user.gender}</h6>
                                   <h6>College Name:<span className="mx-1"></span>{user.college}</h6>
                                   <div className="action_btns w-100 d-flex justify-content-end">
                                   <i className="edit_btn uil uil-edit" onClick={()=>{
                                    setShowUpdateModal(!showUpdateModal);
                                    setUpdateId(id);
                                    console.log(showUpdateModal);
                                   }}
                                    ></i>
                                   <i className="delete_btn uil uil-trash-alt" onClick={()=>deleteData(id)}></i>
                                   </div>
                                </div>
                              );
                           })

                       }
                   </div>
                    <div className="row">
                        <UpdateModal showUpdateModal={showUpdateModal} update_id={update_id}/>
                    </div>
               </div>
    )
}
export default UserList;