function SignUp() {
  const [values, handleChange] = useForm({year:'', name:'', email:'', password:'', checkbox:false})
  const [errors, setError] = React.useState({nameError:'', emailError:'', passwordError:''});
  console.log(errors);
  function validate() {
    if (!values.name) {
      setError({...errors, nameError: 'add a name'})
    } else {
      setError({...errors, nameError: ''})
    }
  }

  function handle() {
    console.log('values: ', values);
    validate();
  }

  return (
    <div>
      <select name="year" value={values.year} onChange={handleChange}>
        <option >Freshman</option>
        <option >Sophmore</option>
        <option >Junior</option>
        <option >Senior</option>
      </select>
      <div>Name</div>
      <input name="name" type="text" value={values.name} onChange={handleChange} />
      <div style={{color: 'red'}} > { errors.nameError } </div>
      <div>Email</div>
      <input name="email" type="email" value={values.email} onChange={handleChange} />
      <div style={{color: 'red'}} > { errors.emailError } </div>
      <div>Password</div>
      <input name="password" type="password" value={values.password} onChange={handleChange} />
      <div style={{color: 'red'}} > { errors.passwordError } </div>
      <div><input id="asd" name="checkbox" type="checkbox" value={values.checkbox} onChange={handleChange} />Remember me</div>
      <button onClick={ handle } >Submit</button>
    </div>
  )
}

const appElement = document.getElementById('root');
const root = ReactDOM.createRoot(appElement).render(<SignUp />);



// ReactDOM.render(
//   <SignUp />,
//   document.querySelector('#root')
// ) 
