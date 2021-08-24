import React, { useState,useEffect } from 'react';
import "../App.css";

const  Register=(props)=>{
  const [isCollgeSelected,setCollegeSelected]=useState(false);
  const [collegeList,setCollegeList]=useState([])
  const [userdata,setUserData]=useState({
      name:"",
      dob:"",
      address:"",
      gender:"",
      college:"",
      hobbies:{
        reading:"",
        gaming:"",
        traveling:"",
        drawing:"",
        other:"",
        extra:"",
      }
  });

  const getInfo=(e)=>{
    let tempdata=JSON.parse(JSON.stringify(userdata));
    if(e.target.name=="name"){
       tempdata.name=e.target.value;
      setUserData(tempdata);
    }
    else if(e.target.name=="dob"){
        tempdata.dob=e.target.value;
        setUserData(tempdata);
    }
    else if(e.target.name=="address"){
      tempdata.address=e.target.value;
      setUserData(tempdata);
    }
    else if(e.target.name=="gender"){
     tempdata.college=e.target.value;
      setUserData({...userdata, gender:e.target.value});
    }
    else if(e.target.name="hobbies"){
      if(e.target.value=="Reading"){
        if(tempdata.hobbies.reading==""){
          tempdata.hobbies.reading=e.target.value;
        }
        else{
          tempdata.hobbies.reading="";
        }
      }
      else if(e.target.value=="Gaming"){
        if(tempdata.hobbies.gaming==""){
          tempdata.hobbies.gaming=e.target.value;
        }
        else{
          tempdata.hobbies.gaming="";
        }

      }
      else if(e.target.value=="Traveling"){
        if(tempdata.hobbies.traveling==""){
          tempdata.hobbies.traveling=e.target.value;
        }
        else{
          tempdata.hobbies.traveling="";
        }

      }
      else if(e.target.value=="Drawing"){
        if(tempdata.hobbies.drawing==""){
          tempdata.hobbies.drawing=e.target.value;
        }
        else{
          tempdata.hobbies.drawing="";
        }
      }
      else if(e.target.value=="Other"){
        if(tempdata.hobbies.other==""){
          tempdata.hobbies.other=e.target.value;
        }
        else{
          tempdata.hobbies.other="";
        }
      }
      else{
        tempdata.hobbies.extra=e.target.value;
      }
      setUserData(tempdata);
    }
  }
    
  const setFormData=(e)=>{
    // inserting data when updated
    e.preventDefault();
   if(props.updateId!=null){
    let tempdata=JSON.parse(localStorage.getItem("studentRegister"));
    tempdata[props.updateId]=userdata;
    localStorage.setItem("studentRegister",JSON.stringify(tempdata));
    setUserData(...tempdata);
    alert("Updated Successfully");
    setUserData({...userdata,name:"",dob:"",college:"",address:"",gender:"",
     hobbies:{
   reading:"",
   gaming:"",
   traveling:"",
   drawing:"",
   other:"",
   extra:""
     }});
   }

  //  inserting register/newly records
   else{
    if(new RegExp("^[a-z A-Z \s]*$").test(userdata.name)){
       if(localStorage.getItem("studentRegister") == null){
         localStorage.setItem("studentRegister",JSON.stringify([userdata]));
       }
     else{
      const prevData=JSON.parse(localStorage.getItem("studentRegister"));
      const newData=[...prevData];
      newData.unshift(userdata);
       localStorage.setItem("studentRegister",JSON.stringify(newData));
     }
     alert("Register Successfully");
     setUserData({...userdata,name:"",dob:"",college:"",address:"",gender:"",
      hobbies:{
    reading:"",
    gaming:"",
    traveling:"",
    drawing:"",
    other:"",
    extra:""
     }});
    }
   else{
    alert("Enter valid input");
   }
 }
}


const getCollegeName=(e)=>{
  if(e.target.value!=" "){
   let tempdata=JSON.parse(JSON.stringify(userdata));
   tempdata.college=e.target.value;
   setUserData(tempdata);
   fetch(`http://universities.hipolabs.com/search?name=${e.target.value}`)
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    setCollegeList([...data]);
    setCollegeSelected(false);
  })
  .catch((error)=>{
    console.log(error);
  })   
  }
  else{
    setCollegeSelected(true);
  }
}

const setCollegeName=(e)=>{
  let tempdata=JSON.parse(JSON.stringify(userdata));
  tempdata.college=e.target.innerText;
 setUserData(tempdata);
 setCollegeSelected(true);
}

const updateFieldInfo=()=>{
  let tempdata=JSON.parse(localStorage.getItem("studentRegister"));
  console.log(tempdata);
  let dataToUpdate=tempdata[props.updateId];
  setUserData(dataToUpdate);
  
}


useEffect(()=>{
 if(props.updateId!=null){
   updateFieldInfo();
 }
},[props.updateId])

    return (
               <div className={ props.size=="12"?`col-12 mx-auto register_div`:`col-md-5 mx-auto register_div`}>
                   <div className="row">
                       <div className="col-12">
                          <h1 className="text-center mx-2">{props.updateId!=null?"Update":"Register"}</h1>
                         <form className="mt-2" onSubmit={setFormData} autoComplete="off">
                            <div className="form-group mt-2">
                            <h6>Enter your Name</h6>
                            <input onChange={getInfo}  value={userdata.name}   name="name" type="text" className="form-control"   placeholder="Enter your name" required/>
                           </div>
                           <div className="form-group mt-2">
                             <h6>Select your Date of Birth</h6>
                            <input onChange={getInfo}  value={userdata.dob}    name="dob" type="date" className="form-control"   placeholder="Select your birth date" required/>
                           </div>
                           <div className="form-group mt-2">
                           <h6>Enter your Address</h6>
                           <textarea className="form-control" value={userdata.address} onChange={getInfo}  name="address" rows="3" placeholder="Enter your address" required></textarea>
                           </div>
                           <div className="form-group mt-2">
                             <h6>Select your Hobbies</h6>
                            <input className="form-check-input mx-2" checked={userdata.hobbies.reading=="Reading"}     onChange={getInfo} value="Reading" name="hobbies"  type="checkbox"/>Reading
                            <input className="form-check-input mx-2" checked={userdata.hobbies.gaming=="Gaming"}       onChange={getInfo} value="Gaming" name="hobbies"  type="checkbox"/>Gaming
                            <input className="form-check-input mx-2" checked={userdata.hobbies.traveling=="Traveling"} onChange={getInfo} value="Traveling" name="hobbies"  type="checkbox"/>Traveling<br/>
                            <input className="form-check-input mx-2" checked={userdata.hobbies.drawing=="Drawing"}     onChange={getInfo} value="Drawing" name="hobbies"  type="checkbox"/>Drawing
                            <input className="form-check-input mx-2" checked={userdata.hobbies.other=="Other"}         onChange={getInfo} value="Other" name="hobbies"  type="checkbox"/>Other
                            {
                            userdata.hobbies.other=="Other"?
                            <input className="form-control mx-2"    onChange={getInfo} type="text" name="hobbies" value={userdata.hobbies.extra} placeholder="Enter your more hobbies"/>
                            :null
                            }
                           </div>
                           <div className="form-group mt-2">
                             <h6>Select your Gender</h6>
                            <input className="form-check-input mx-2"  onChange={getInfo} name="gender"  type="radio" value="Male"   checked={userdata.gender=="Male" }/>Male
                            <input className="form-check-input mx-2"  onChange={getInfo} name="gender"  type="radio" value="Female" checked={userdata.gender=="Female"}/>Female
                            <input className="form-check-input mx-2"  onChange={getInfo} name="gender"  type="radio" value="Other"  checked={userdata.gender=="Other"}/>Other
                           </div>
                           <div className="form-group my-2 search_div">
                           <input type="text" className="form-control" value={userdata.college} onChange={getCollegeName} 
                           placeholder="Enter your college name" required/>
                           <section className={`search_result ${isCollgeSelected?'selected':''}`}>
                             <ul>
                               {
                                 collegeList.map((data,id)=>{
                                   return  <li key={id} onClick={setCollegeName}>{data.name}</li>
                                 })
                               }
                             
                             </ul>
                           </section>
                           </div>
                          <button type="submit" className="btn btn-primary mt-4 w-100">{props.updateId!=null?"Update":"Register"}</button>
                       </form>
                       </div>
                   </div>
               </div>
    )
}
export default Register;