import { useEffect, useState } from "react";

import provinces from "../jsonData/provinces.json";
import style from "../assets/css/form.module.css";

export default function Provinces({ onProvinceSelect }) {
  const [province, setProvince] = useState([]);

  useEffect(() => {
    setProvince(provinces);
  }, []);
  const handlechange = (e) => {
    onProvinceSelect(e.target.selectedIndex);
  };

  return (
    <div>
      <select onClick={handlechange} className={style.selectCity}>
        {province.map((state) => (
          <option key={state.id} value={state.id} selected={state.id[1]}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}
