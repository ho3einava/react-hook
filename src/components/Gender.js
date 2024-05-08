


export default function Gender({id , name , register , label , value }) {
    
  return (
    <div>
       
        
        
       
         <label htmlFor={id}>
        <input type='radio'    {...register(name)} value={value}  id={id} checked/>
          
          {label}
         </label> 
        
          
        
          
          
    </div>
  )
}
