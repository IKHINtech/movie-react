const Input = ({ name, label, error, ...rest }) => {
  // import { errors } from 'joi-browser';
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className={error == null ? "form-control" : "form-control is-invalid"}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
