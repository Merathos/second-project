import { Wrapper } from './styles';

const TextInput = ({
  type = 'text',
  name,
  label,
  className,
  required = true,
  cv,
  correct,
  warning,
  error,
  errorMsg,
  phone,
  date = false,
  reference,
}) => {
  const handleDateMask = e => {
    const input = e.target;
    if (e.charCode < 47 || e.charCode > 57) {
      e.preventDefault();
    }
    const len = input.value.length;

    if (len !== 1 || len !== 3) {
      if (e.charCode === 47) {
        e.preventDefault();
      }
    }

    if (len === 2) {
      input.value += '.';
    }

    if (len === 5) {
      input.value += '.';
    }
  };

  const handlePhoneMask = e => {
    if ((e.charCode < 48 && e.charCode !== 43) || e.charCode > 57) {
      e.preventDefault();
    }
  };

  return (
    <Wrapper
      className={className}
      cv={cv}
      correct={correct}
      warning={warning}
      error={error}
    >
      {errorMsg && <p>{errorMsg}</p>}
      <input
        type={type}
        placeholder=" "
        name={name}
        id={name}
        autoComplete="off"
        required={required}
        maxLength={date ? 10 : phone ? 13 : 999}
        onKeyPress={date ? handleDateMask : phone ? handlePhoneMask : () => {}}
        ref={reference}
      />
      <label htmlFor={name}>{label}</label>
    </Wrapper>
  );
};

export default TextInput;
