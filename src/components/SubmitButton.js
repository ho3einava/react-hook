import { useFormContext } from "react-hook-form";
import { forwardRef } from "react";

function SubmitButton({ children, ...props }, ref) {
  const { handleSubmit } = useFormContext();
  

  return (
    <button ref={ref} {...props} onClick={handleSubmit(submitForm)}>
      Date
    </button>
  );

  function submitForm({persian}) {
        
    console.log(JSON.stringify({persian}));
    
  }
}

export default forwardRef(SubmitButton);
