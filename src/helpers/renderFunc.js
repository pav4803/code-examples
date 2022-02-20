export const ReturnImput = ({
  name,
  placeholder,
  placeholder2,
  type,
  form,
  changeHandler,
  divAdditionalClass,
  formAdditionalClass,
  maxLength,
  disabled = false,
}) => {
  if (!placeholder2) {
    placeholder2 = placeholder;
  }
  if (placeholder2 === "") {
    placeholder2 = placeholder;
  }
  if (placeholder2 === undefined) {
    placeholder2 = placeholder;
  }
  return (
    <div className={`form-group ${divAdditionalClass}`}>
      <label htmlFor={name}>
        <small>{placeholder}</small>
      </label>
      <input
        type={type}
        className={`form-control ${formAdditionalClass}`}
        placeholder={placeholder2}
        defaultValue={form}
        maxLength={maxLength}
        name={name}
        onChange={changeHandler}
        disabled={disabled}
      />
    </div>
  );
};
