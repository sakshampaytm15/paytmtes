(function merchantCheckoutFile() {
  var MID = 'Rechar32004946353223';
  var URL = 'https://pgp-hotfix.paytm.in/merchantpgpui/checkoutjs/Rechar32004946353223';
  var merchantCallback = null;
  var createDOMElements = function(input) {
    var scriptEle = document.createElement('script'),
      cssEle = document.createElement('link'),
      iframeEle = document.createElement('iframe');

    if (cssEle) {
      cssEle.href = input.style;
      cssEle.rel = 'stylesheet';
      cssEle.type = 'text/css';
      document.head.appendChild(cssEle);
    }
    if (scriptEle) {
      scriptEle.async = true;
      scriptEle.src = input.js;
      scriptEle.type = 'application/javascript';
      scriptEle.onload = function() {
        if (window.CheckoutJS) {
          if (window.Paytm && window.Paytm.CheckoutJS) {
            for (var key in window.CheckoutJS) {
              if (window.CheckoutJS.hasOwnProperty(key)) {
                window.Paytm.CheckoutJS[key] = window.CheckoutJS[key];
              }
            }
          }
          try {
            delete window.CheckoutJS; // remove CheckoutJS from window scope
          } catch (e) {}
          if (window.Paytm.CheckoutJS.initLib) {
            window.Paytm.CheckoutJS.initLib(MID).then(() => {
              if (merchantCallback) {
                merchantCallback.call();
              }
            });
          } else {
            window.Paytm.CheckoutJS.fetchData(MID);
            if (merchantCallback) {
              merchantCallback.call();
            }
          }

          // window.Paytm.CheckoutJS.fetchData(MID);
          // if (merchantCallback) {
          //   merchantCallback.call();
          // }
        }
      };
      document.body.appendChild(scriptEle);
    }
  };

  var post = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        var data = JSON.parse(this.responseText);
        createDOMElements(data);
      }
    };
    xhr.open('GET', URL, true);
    xhr.send(null);
  };

  post();

  window.Paytm = {
    CheckoutJS: {
      onLoad: function(callback) {
        if (!callback || callback.constructor !== Function) {
          throw new Error('callback in onLoad function should be of function type');
        }
        merchantCallback = callback;
      }
    }
  };
})();
