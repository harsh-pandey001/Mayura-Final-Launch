function SendMail() {
    var params = {
      from_name: document.getElementById("fullName").value,
      email_id: document.getElementById("email_id").value,
      phn_no: document.getElementById("phone_number").value,
      message: document.getElementById("message").value
    };
    function phonenumber(inputtxt)
    { 
      var phoneno = /^\d{10}$/;
      if((inputtxt.match(phoneno)))
            {
          return true;
            }
          else
            {
            return false;
           }
    }
    if (
      params.from_name === '' ||
      params.email_id === '' ||
      params.message === '' || params.phn_no === ''
    ) {
      alert("Empty block");
    } else if( phonenumber(params.phn_no) == false) {
          alert("Phone no. not valid")
        }
        else{
      emailjs
        .send("service_1k7jwpo", "template_xpepx5f", params)
        .then(function (res) {
          alert("Success!" + res.status);
        });
    }
  }