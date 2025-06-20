import React,{useState,useEffect} from 'react'

const Cardlist = ({data}) => {
  const [totalcityes,setTotalcityes] = useState(0);
  useEffect(()=>{
   setTotalcityes(data.length);
  },[data]);
  return <>
  <div className='row'>
    <div className='text-primary'>Total Cities:{totalcityes}</div>
  {
    data.map((x)=>(
      <div className='col-md-3'>
        <div className='card'>
        <img src={x.image} className='card-img-top' alt='img' />
        <div className='card-body'>
        <h5 className='card-title'>{x.title}</h5>
        <p className='card-text'>{x.desc}</p>
        <button className='btn btn-danger'>View City</button>
        </div>  
        </div>
     </div>   
    ))
}
</div>
 </>
}

export default Cardlist