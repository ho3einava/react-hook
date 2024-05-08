import { useEffect, useState } from "react";
import style from "../assets/css/form.module.css";
import cities from "../jsonData/cities.json";

export default function Cities({ provinceId }) {
  const [filterCities, setFilterCities] = useState([]);
  useEffect(() => {
    if (provinceId) {
      const filtered = cities.filter((city) => city.province_id === provinceId);
      setFilterCities(filtered);
    }
  }, [provinceId]);

  return (
    <div>
      <select className={style.selectCity}>
        {filterCities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
