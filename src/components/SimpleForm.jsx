import useForm from "../hooks/useForm";

function SimpleForm() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    // confirmPassword: ''
  });
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Custom Hook দিয়ে ফর্ম</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          className="form-input"
        />
        <div className="btn-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="reset" className="reset-btn" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>
      <pre className="data-json">{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
export default SimpleForm;
