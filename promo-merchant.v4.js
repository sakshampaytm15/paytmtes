(function merchantPromoFile() {
  var MID = 'Rechar32004946353223';
  var URL = 'https://cdn.jsdelivr.net/gh/sakshampaytm15/paytmtes/promo.json';
  var promoCallback = null;
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
      scriptEle.src = input.js;;
      scriptEle.type = 'application/javascript';
      scriptEle.crossOrigin = "anonymous";
      scriptEle.onload = function() {
        if (window.PromoJS) {
          if (window.Paytm && window.Paytm.PromoJS) {
            for (var key in window.PromoJS) {
              if (window.PromoJS.hasOwnProperty(key)) {
                window.Paytm.PromoJS[key] = window.PromoJS[key];
              }
            }
          }
          try {
            delete window.PromoJS; // remove PromoJS from window scope
          } catch (e) {}
          if (window.Paytm.PromoJS.initLib) {
            window.Paytm.PromoJS.initLib(MID).then(() => {
              if (promoCallback) {
                promoCallback.call();
              }
            });
          }
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

  if(!window.Paytm){
    console.log("no window paytm url found")
    // check if window.Paytm exists if not create one
    window.Paytm = {};
  } else {
    console.log("window.Paytm", window.Paytm)
  }


  window.Paytm.PromoJS = {
      onLoad: function(callback) {
        if (!callback || callback.constructor !== Function) {
          throw new Error('callback in onLoad function should be of function type');
        }
        promoCallback = callback;
      }
    }
})();
