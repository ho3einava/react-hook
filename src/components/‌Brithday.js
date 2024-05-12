import DatePicker from "react-multi-date-picker";
import persianDate from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

export default function Brithday({ register }) {
  return (
    <div>
      <Form>
        <DatePicker
          calendar={persianDate}
          locale={persian_fa}
          id="persian"
          name="persian"
          value={register.value}
          // onChange={(date) => setValue()}
        />
        <SubmitButton>submit</SubmitButton>
      </Form>
    </div>
  );
}
