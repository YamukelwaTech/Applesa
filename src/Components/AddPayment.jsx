// import card from "../Assets/card-img.jpg"
import cards from "../Assets/card-svg.svg"
import "../css/AddPayment.css"
import lock from "../Assets/lock.svg"



function AddPayment() {
    return (
      <>
      <div className="ccontainers">
        <div className="top-ccontainer">
          <h1>SELECT A CARD</h1>
          <p><img src={cards} alt=""></img>MasterCard ending in 4242</p>
          <p><img src={cards} alt=""></img>VISA Debit ending in 2894</p>
        </div>

        <div className="bottom-ccontainer">
          <form>
           <h1>ADD A NEW CARD</h1>
            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Maker" />
              </div>
            </div>
            <div className="form-group">
              <div className="card">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="5126-5987-2214-7621" />
              </div>
            </div>
          <div className="form-group">
            <div className="Date">
             <label>Expiry Date</label>
             {/* <input type="Date" id="Date" placeholder="" /> */}
             <input type="text" id="Date" placeholder="MM/YYYY" />
            </div>

            <div className="Date">
             <label>CVC</label>
             {/* <input type="Date" id="Date" placeholder="" /> */}
             <input type="numeric" id="Date" placeholder="123" />
            </div>
        </div>
        <div className="checkbox">
        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
        <label htmlFor="myCheckbox">Save this as your default payment method</label>
        </div>

        <div className="btn5">
        <button className="bttn5">Add Payment Method</button>
        </div>

        <div className="la-line">
          <p id="ba">back</p>
          <p id="la"><img src={lock} alt=""></img>Secure Connection</p>
        </div>

          </form>

        </div>


      </div>
      </>
    );
  }

  export default AddPayment ;