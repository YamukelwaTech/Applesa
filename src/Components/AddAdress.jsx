


function AddAdress() {
    return (
      <>
      <div className="ccontainers">
       <div className="bottom-container">
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
            </div>
        
          </form>
        
        </div>
      </div>
      </>
    );
  }
  
  export default AddAdress ;