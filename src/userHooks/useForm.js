import React from 'react';

const types = {
  cep: { regex: /^\d{5}-?\d{3}$/, message: 'CEP inválido' },
  email: { regex: /\S+@\S+\.\S+/, message: 'Preencha um email válido' },
  password: {
    regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
    message:
      'A senha deve conter no mínimo 8 caracteres, uma letra maiúscula e um número',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validadeInput(valor) {
    if (type === false) return true;
    if (valor.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(valor)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validadeInput(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validadeInput(value),
    validate: () => validadeInput(value),
  };
};

export default useForm;
