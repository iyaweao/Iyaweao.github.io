/*checkout*/
$(document).ready(function(){
$("#placeOrder").submit(function(e){
  e.preventDefault();
  $.ajax({
    url: 'checkout.php',
    method: 'POST',
    data: $('form').serialize()+"&action=order",
    success: function(response){
      $("#order").html(response);
    }
  });
});
});

//flutterwave payment integration. ps: dont forget the flutterwave javascript at the checkout page//
const form = document.getElementById("placeOrder");

form.addEventListener("#pay",payNow);

  function payNow(e) {
    /*prevent normal form submission*/
    e.preventDefault();
    //set configuration//
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-c32793f87ca4b94754384b5ea731f323-X",
      tx_ref: "io_"+Math.floor((Math.random()*1000000000)+1),
      amount: document.getElementById("amount_paid").value,
      currency: "NGN",
      customer: {
        email: document.getElementById("cEmail").value,
        phonenumber: document.getElementById("cPhone").value,
        name: document.getElementById("cName").value
      },
      callback:function(data){
        const reference = data.tx_ref;
        alert("Payment was Successfully Completed!" +reference);
      },
      customizations: {
        title: "Adidas",
        description: document.getElementById("products").value
      }
    });
  }
