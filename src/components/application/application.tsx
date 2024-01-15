const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
        />
      </div>
      <div>
        <label htmlFor='job-location'>Job Location</label>
        <select id='job-location'>
          <option value=''>Select a Country</option>
          <option value='AU'>Australia</option>
          <option value='CA'>Canada</option>
          <option value='IN'>India</option>
          <option value='UK'>United Kingdom</option>
          <option value='US'>United States</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            id='terms-and-conditions'
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Application
