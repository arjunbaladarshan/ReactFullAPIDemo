import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditFaculty(){
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/"+id;
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])

    return(<>
    <div class="form-group row">
        <label for="text3" class="col-4 col-form-label">Enter FacultyID</label> 
        <div class="col-8">
        <input value={data.FacultyID} onChange={(e)=>{
            setData({...data,FacultyID: e.target.value})
        }} type="text" class="form-control" />
        </div>
    </div>
    <div class="form-group row">
        <label for="text1" class="col-4 col-form-label">Enter FacultyName</label> 
        <div class="col-8">
        <input value={data.FacultyName} onChange={(e)=>{
            setData({...data,FacultyName:e.target.value})
        }} type="text" class="form-control" />
        </div>
    </div>
    <div class="form-group row">
        <label for="text" class="col-4 col-form-label">Enter FacultyImage</label> 
        <div class="col-8">
        <input value={data.FacultyImage} onChange={(e)=>{
            setData({...data,FacultyImage:e.target.value})
        }} type="text" class="form-control" />
        </div>
    </div>
    <div class="form-group row">
        <label for="text2" class="col-4 col-form-label">Enter FacultyDepartment</label> 
        <div class="col-8">
        <input value={data.FacultyDepartment} onChange={(e)=>{
            setData({...data,FacultyDepartment:e.target.value})
        }} type="text" class="form-control"/>
        </div>
    </div>
    <div class="form-group row">
        <label for="text4" class="col-4 col-form-label">Enter FacultySalary</label> 
        <div class="col-8">
        <input value={data.FacultySalary} onChange={(e)=>{
            setData({...data,FacultySalary:e.target.value})
        }} type="text" class="form-control" />
        </div>
    </div> 
    <div class="form-group row">
        <div class="offset-4 col-8">
        <button onClick={()=>{
            const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/"+id;
            fetch(apiUrl,{
                method:"PUT",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(res=>res.json())
            .then(res=>{
                navigate("/faculties")
            });
        }} class="btn btn-primary">Edit</button>
        </div>
    </div>
    
    </>);
}

export default EditFaculty;