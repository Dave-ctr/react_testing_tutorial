const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img
        src="https://via.placeholder.com/150"
        alt="a placeholder on a page"
      />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value="Dave"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="NZ">New Zealand</option>
            <option value="UK">United Kingdom</option>
            <option value="US">United States</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms-and-conditions" />I agree to the
            terms and conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
};

export default Application;
