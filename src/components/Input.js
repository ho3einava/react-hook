import style from "../assets/css/form.module.css";

export default function Input({
  id,
  placeholder,
  name,
  register,
  error,
  type,
  valueAsnumber,
}) {
  return (
    <div>
      <input
        className={style.textField}
        type={type}
        name={name}
        {...register(name, {
          valueAsnumber: valueAsnumber,
        })}
        id={id}
        placeholder={placeholder}
      />
      {error[name] ? (
        <p className={style.error}> فیلد {placeholder} اجباری است</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
