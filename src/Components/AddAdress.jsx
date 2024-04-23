import lock from "../Assets/lock.svg"



function AddAdress() {
    return (
      <>
      <div className="ccontainers">
       <div className="bottom-ccontainer">
          <form>
            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Shipping name </label>
                <input type="text" id="name" placeholder="John Maker" />
              </div>
            </div>
            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Street name</label>
                <input type="text" id="name" placeholder="123 Plae Grond Street" />
              </div>
            </div>

            <div className="form-group">
              <div className="card">
                <label htmlFor="name">City</label>
                <input type="text" id="name" placeholder="Vermont" />
              </div>
            </div>

            <div className="form-group">
              <div className="card">
                <label htmlFor="name">State/Province</label>
                <input type="text" id="name" placeholder="California" />
              </div>
            </div>

            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Country</label>
                <input type="text" id="name" placeholder="United States" />
              </div>
            </div><br></br>

            <div className="checkbox">
        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
        <label htmlFor="myCheckbox">Save this as your default payment method</label>
        </div>

        <div className="btn5">
        <button className="bttn5">Add Payment Method</button>
        </div>

        <div className="la-line">
          <p>back</p>
          <p id="la"><img src={lock} alt=""></img>Secure Connection</p>
        </div>
        
          </form>
        
        </div>
      </div>
      </>
    );
  }
  
  export default AddAdress ;