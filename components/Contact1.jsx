// // I want this form to be reseted when submited.

// import React from 'react';

// const Contact1 = () => {
//     return (
//                     <div>
//                         <form
//                             id='form1'
//                             action='https://getform.io/f/70877771-e309-418b-8fb8-d56d4a42203e' 
//                             method="POST"
//                             encType="multipart/form-data"
//                         >                        
//                             <div>
//                                 <div>
//                                     <label>Name</label>
//                                     <input 
//                                         type="text" 
//                                         name='name'
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Phone Number</label>
//                                     <input
//                                         type="text"
//                                         name='phone' 
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label>Email</label>
//                                 <input
//                                     type="email" 
//                                     name='email'
//                                 />
//                             </div>
//                             <div>
//                                 <label>Subject</label>
//                                 <input
//                                     type="text"
//                                     name='subject' 
//                                 />
//                             </div>
//                             <div>
//                                 <label>Message</label>
//                                 <textarea
//                                     rows='10'
//                                     name='message' />
//                             </div>
//                             <div>
//                                 <button
//                                     onClick={function(){
//                                         document.getElementById('form1').submit()
//                                     }}
//                                     >Send Message
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//   );
// }

// export default Contact1

import React from 'react';

const Contact1 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
      }
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <form
        id='form1'
        action='https://getform.io/f/70877771-e309-418b-8fb8-d56d4a42203e' 
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >                        
        <div>
          <div>
            <label>Name</label>
            <input 
              type="text" 
              name='name'
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name='phone' 
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email" 
            name='email'
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name='subject' 
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            rows='10'
            name='message' />
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact1;
