function useForm(initialValues) {
  const [values, setValues] = React.useState(initialValues);

  return [
    values,
    e => {
      if (e.type === 'change') {
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setValues({
          ...values,
          [e.target.name]: newValue
        })
      }
    }
  ];
}