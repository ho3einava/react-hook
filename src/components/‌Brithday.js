
import DatePicker, { DateObject } from "react-multi-date-picker";
import persianDate from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";


export default function Brithday({ id, placeholder , register , dates }) {

  const [date, setDate] = useState(
    
    new DateObject({ calendar: persianDate }).set("date", 10)
  );
         const handleChange = (e) => {
          setDate(e.target.value)
         }
  
  return (
    <div>
      
      <DatePicker
      style={{width:"400px" , height:"45px"}}
      onChange={handleChange}
        {...register("dates" , {valueAsDate : true})}
        minDate="1340/01/01"
        maxDate="1403/02/29"
        id={id}
        value={date}
        placeholder={placeholder}
        calendar={persianDate}
        locale={persian_fa}
        name={dates}
        
        
      />
      

      {/* {error[name] ? (
        <p className={style.error}> فیلد {placeholder} اجباری است</p>
      ) : (
        <p></p>
      )} */}
    </div>
  );
}
