import { useForm } from "react-hook-form";
import style from "../assets/css/form.module.css";
import Input from "./Input";

import Brithday from "./‌Brithday";
import Gender from "./Gender";
import Favourite from "./Favourite";

import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import LocationSelector from "./LocationSelector";


const phoneNumberRegex = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g;
export default function UserForm() {
  const schema = z.object({
    name: z
      .string()
      .min(2, "name is required")
      .max(10, "name must be at 10 characters long"),
    family: z
      .string()
      .min(2, "family is reqiured")
      .max(10, "name must be at 10 characters long"),
    nationalCode: z.string().min(10),
    phoneNumber: z.string().regex(phoneNumberRegex, "phoneNumber is invalid"),
    
    
    favourite: z.array(z.string()),
    province: z.string(),
    city: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (logData) => {
    console.log(logData);
  };

  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <h3 className={style.label}>فرم اطلاعات</h3>

        <div className={style.inputField}>
          <label id="name">نام : </label>
          <input {...register("name")} type="text" placeholder="نام" />
        </div>

        <div className={style.inputField}>
          <label id="family">نام خانوادگی : </label>
          <Input
            register={register}
            error={errors}
            type={"text"}
            name={"family"}
            id="family"
            placeholder={"نام خانوادگی"}
          />
        </div>

        <div className={style.inputField}>
          <label id="nationalCode">کد ملی :</label>
          <Input
            register={register}
            error={errors}
            name={"nationalCode"}
            id="nationalCode"
            placeholder={"کد ملی"}
          />
        </div>

        <div className={style.inputField}>
          <label id="phoneNumber">شماره همراه :</label>
          <Input
            register={register}
            error={errors}
            name="phoneNumber"
            id="phoneNumber"
            placeholder={"شماره همراه"}
          />
        </div>

        <div className={style.inputField}>
          <label id="brithday">تاریخ تولد :</label>
          <Brithday
            className={style.brithday}
            error={errors}
            register={register}
            name={"brithday"}
            id="brithday"
            placeholder={"تاریخ تولد"}
          />
        </div>

         <div className={style.inputField}>
          <label>جنسیت : </label>
          <Gender
            label={"مرد"}
            value="Male"
            register={register}
            name={"gender"}
            id={"male"}
          />
          <Gender
            label={"زن"}
            value="Fmale"
            register={register}
            name={"gender"}
            id={"fmale"}
          />
        </div>

        <div className={style.inputField}>
          <label>علاقه مندی ها :</label>
          <Favourite
            label={"کتاب"}
            value={"book"}
            register={register}
            name={"favourite"}
            id={"book"}
          />
          <Favourite
            label={"موسیقی"}
            value={"music"}
            register={register}
            name={"favourite"}
            id={"music"}
          />
          <Favourite
            label={"فیلم"}
            value={"movie"}
            register={register}
            name={"favourite"}
            id={"movie"}
          />
        </div>

        <LocationSelector register={register} />

        <button className={style.button} type="submit">
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
}
