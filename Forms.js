const [name, setName] = useState("");

const myFunc=()=>{

    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
      }

return (
  <form>
    <label>Enter your name:
      <input
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  </form>)
}
export default myFunc;