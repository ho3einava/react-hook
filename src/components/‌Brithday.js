import style from '../assets/css/form.module.css'


export default function Brithday({id , placeholder  , name , register , error }) {
    
  return (
    <div>
      
        
        <input min="1990-01-01" max="2024-12-29" className={style.textField} type="date" name={name} {...register(name , {required : true})}   id={id} placeholder={placeholder}/>
        {error[name]? <p className={style.error}> فیلد {placeholder} اجباری است</p> : <p></p>}
      
    </div>
  )
}
