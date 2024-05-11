export default function Gender({ id, name, register, label, value }) {
  return (
    
    <div>
      <label htmlFor={id}>
        <input type="radio" {...register(value)} value={value} id={id}  name={name} checked/>

        {label}
      </label>
    </div>
  );
}
