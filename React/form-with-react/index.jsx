
function SignUp() {
  const [values, handleChange] = useForm({year:'', name:'', email:'', password:'', checkbox:false})
  
  function handle() {
    console.log('values: ', values);
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
      <div>Email</div>
      <input name="email" type="email" value={values.email} onChange={handleChange} />
      <div>Password</div>
      <input name="password" type="password" value={values.password} onChange={handleChange} />
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
