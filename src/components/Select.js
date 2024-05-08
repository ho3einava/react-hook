import style from "../assets/css/form.module.css";

export default function Select({ id, placeholder, name, register }) {
  return (
    <div>
      <div className={style.inputField}>
        <label id={id}>{placeholder} : </label>
        <select
          className={style.textField}
          name={name}
          {...register(name)}
          id={id}
          placeholder={placeholder}
        >
          <option value="tehran">tehran</option>
        </select>
      </div>
    </div>
  );
}
