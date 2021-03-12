var Form = {
    init: function(el) {
      this._el           = el;
      this._startingText = this._el.querySelector('.js-starting-text');
      this._endingText   = this._el.querySelector('.js-ending-text');
      this._input        = this._el.querySelector('input[type="email"]');
      this._submit       = this._el.querySelector('button[type="submit"]');
      this._isDisabled   = false;
  
      this.events();
    },
    events: function() {
      var self = this;
      
        this._el.addEventListener('click', function() {
          if (!self._isDisabled) {
            TweenMax.to(self._startingText, 0.2, {
              scale: 0,
              autoAlpha: 0,
              onComplete: function() {
                TweenMax.to(self._startingText, 0.2, {
                  display: 'none'
                }, 0.5);
                self.open();
                console.log('click form')
              }
            });
          }
        });
  
        this._submit.addEventListener('click', function(e) {
          if (!self._isDisabled) {

            e.preventDefault();
            e.stopPropagation();
  
            self.hideChildren(); 
          }          
        }) 
    },
    open: function() {
      var self = this;
  
      TweenMax.to(self._el, 0.3, {
        width: '25rem',
        ease: Expo.easeOut,
        display: 'flex',
        onComplete: function() {
          self.showChildren();
        }
      });
    },
    showChildren: function() {
      var self = this;
      console.log('show input + submit');
  
      TweenMax.to(self._input, 0.2, {
        scale: 1,
        ease: Expo.easeOut,
        display: 'initial'
      });
      TweenMax.to(self._submit, 0.2, {
        scale: 1,
        ease: Expo.easeOut,
        display: 'initial'
      });
    },
    hideChildren: function() {
      var self = this;
      console.log('hide input + submit')
  
      TweenMax.to(self._input, 0.3, {
        scale: 0,
        autoAlpha: 0,
        ease: Expo.easeOut,
        onComplete: function() {
          TweenMax.to(self._input, 0.2, {
            display: 'none',
            clearProps: 'all'
          });
          self.close();
        }
      });
      TweenMax.to(self._submit, 0.3, {
        scale: 0,
        autoAlpha: 0,
        ease: Expo.easeOut,
        onComplete: function() {
          TweenMax.to(self._submit, 0.2, {
            display: 'none',
            clearProps: 'all'
          });
        }
      });
    },
    close: function() {
      var self = this;
  
      console.log('close');
      TweenMax.to(self._el, 0.3, {
        width: '25rem',
        ease: Expo.easeOut,
        onComplete: function() {
          self.showEndingText();
        }
      });
    },
    showEndingText: function() {
      var self = this;
  
      TweenMax.to(self._endingText, 0.3, {
        scale: 1,
        ease: Expo.easeOut,
        display: 'initial',
        onComplete: function() {
          console.log('end', self)
          self._isDisabled = true;
        }
      });
    }
  }
  
  var form = Form;
  form.init(document.querySelector('.js-form'));