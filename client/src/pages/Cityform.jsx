import React,{useState} from 'react';
import axios from 'axios';
const Cityform = () => {
const [formdata,setFormdata] = useState({
    title:"",
    desc:"",
    status:""
});
const [image,setImage] = useState(null);
const hc = (e) => {
    setFormdata((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }));
};
const himg = (e)=> {
    setImage(e.target.files[0]);
};
const hs = async(e)=>{
    e.preventDefault();
    const data = new FormData();
    data.append('title',formdata.title);
     data.append('desc',formdata.desc);
      data.append('status',formdata.status);
       data.append('image',formdata.image);

       try {
        const res = await axios.post('http://localhost:6500/api/zones',data);
        console.log('uploaded',res.data);
        alert('city added sucessfully');
        setFormdata({title:'',desc:'',status:''});
        setImage(null);
        e.target.reset();
       } catch(err) {
        console.error(err);
        alert('error data');
       }
}  
  return <>

  </>
}

export default Cityform