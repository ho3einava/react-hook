import Provinces from "./Provinces";
import Cities from "./Cities";
import { useState } from "react";
import style from "../assets/css/form.module.css";
export default function LocationSelector({ register, name }) {
  const [selectedProvince, setSelectedProvince] = useState("");

  const handleProvinceSelected = (provinceId) => {
    setSelectedProvince(provinceId);
  };

  return (
    <div>
      <div className={style.inputField}>
        <label>شهر و استان:</label>
        <Provinces
          onProvinceSelect={handleProvinceSelected}
          register={register}
          name="province"
        />
        <Cities provinceId={selectedProvince} register={register} name="city" />
      </div>
    </div>
  );
}
