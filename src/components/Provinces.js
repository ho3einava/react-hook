import provinces from "../jsonData/provinces.json";
import style from "../assets/css/form.module.css";

export default function Provinces({ onProvinceSelect, register, name }) {
  return (
    <div>
      <select
        className={style.selectCity}
        {...register(name, {
          onChange: (e) => {
            onProvinceSelect(e.target.value);
          },
        })}
      >
        {provinces.map((state) => {
          return (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
