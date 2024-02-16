
function SignUp() {
  const [year, setYear] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false)
  function handle() {
    console.log(`year: ${year}`);
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`remember-me: ${rememberMe}`);
  }

  return (
    <div>
      <select value={year} onChange={e => setYear(e.target.value)}>
        <option >Freshman</option>
        <option >Sophmore</option>
        <option >Junior</option>
        <option >Senior</option>
      </select>
      <div>Name</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>Email</div>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <div>Password</div>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <div><input type="checkbox" value={rememberMe} onChange={e => setRememberMe(e.target.checked)} />Remember me</div>
      <button onClick={ handle } >Submit</button>
    </div>
  )
}

const appElement = document.getElementById('root');
const root = ReactDOM.createRoot(appElement).render(<SignUp />);
root



// ReactDOM.render(
//   <SignUp />,
//   document.querySelector('#root')
// ) 
