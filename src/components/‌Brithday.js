
import DatePicker from "react-multi-date-picker";
import persianDate from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import style from '../assets/css/form.module.css'

export default function Brithday({ id, placeholder , register , name ,error }) {

 
  
  return (
    <div>
      
      <DatePicker
      style={{width:"400px" , height:"45px"}}
      
        {...register("name")}
        minDate="1340/01/01"
        maxDate="1403/02/29"
        id={id}
        
        placeholder={placeholder}
        calendar={persianDate}
        locale={persian_fa}
        name={name}
        
        
      />
      

      {error[name] ? (
        <p className={style.error}> فیلد {placeholder} اجباری است</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
