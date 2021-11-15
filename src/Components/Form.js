import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
          <div className=" formulaire">
            <h3> SUBSCRIPTION FORM</h3>
              <form className="form">
               {/* FIRST &LAST NAME */}
                <div className="form-group mb-4">
                  <input type="text" id="Lastname" className="form-control"  placeholder="Full Name" required/>
                </div>
                
             
               {/* Company Name */}
                <div className="form-group mb-4 ">
                  <input type="text" id="cp" className="form-control"  placeholder="Company Name"required />
                </div>
        
               {/* Address */}
              <div className="form-group mb-4">
                 <input type="text" id="address" className="form-control"  placeholder="Address" required />
               </div>
              {/* Email */}
              <div className="form-group mb-4">
                <input type="email" id="email" className="form-control" placeholder="Email address" required />
              </div>
              {/* Phone */}
              <div className="form-group mb-4">
                <input type="tel" id="phone" className="form-control" placeholder="Phone Number" required />
              </div>
            {/* Password */}
             <div className="form-group mb-4">
              <input type="password" className="form-control" placeholder="Password" required></input>
             </div>
           
        
            {/* City */}
             <select className="form-select mb-4">
               <option selected>Please select City</option>
               <option value="1">Tunis</option>
               <option value="1">Ariana</option>
               <option value="2">Sfax</option>
               <option value="3">Medenine</option>
               <option value="3">Sousse</option>
               <option value="3">Tataouine</option>
               <option value="3">Mounastir</option>
               <option value="3">Kairouan</option>
               <option value="3">Bizerte</option>
               <option value="3">Gabes</option>
               <option value="3">Nabeul</option>
               <option value="3">Gafsa</option>
               <option value="3">Ben Arous</option>
               <option value="3">Kasserine</option>
               <option value="3">Jandouba</option>
               <option value="3">Kebili</option>
               <option value="3">Beja</option>
               <option value="3">Sidi Bouzid</option>
               <option value="3">Beja</option>
               <option value="3">Sidi Bouzid</option>
             </select>
            {/* Gender */}
             <div  className="gender">
               <h6> Gender:</h6>
                 <div className="form-check">
                   <label className="form-check-label" for="Female">Female</label>
                     <input className="form-check-input" type="radio" name="Female" id="Female" />
                </div>
                 <div className="form-check mb-4">
                   <label className="form-check-label" for="Male"> Male</label>
                     <input className="form-check-input" type="radio" name="Male" id="Male" />
                 </div>
               
            </div>
            
            {/* Comment or suggestation */}
            <div className="form-group mb-4" >
              <textarea   id="message" className="form-control" rows="12" placeholder="Comments, Questions, or Suggestions" />
            </div>
           {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-lg bt"  >SEND</button>
        </form>
        </div>
        );
    }
}

export default Form;
