import { useState } from "react";

function useForm(initialValues = {}) {
  const [values, setvalues] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setvalues({
      ...values, // spread operator to keep other values unchanged
      [name]: value, // dynamic key name
    });
  };

  const resetForm = () => {
    setvalues(initialValues);
  };
  return {
    values,
    handleChange,
    resetForm,
    setvalues,
  };
}
export default useForm;
