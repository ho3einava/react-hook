

export default function Favourite({register ,id , label ,value,  name}) {
  return (
    <div>
         
                
               <form>
                <label htmlFor={id}>{label}
                <input type='checkbox' {...register(name)} value={value} id={id} />
                
                </label>
               </form>
          
    </div>
  )
}
