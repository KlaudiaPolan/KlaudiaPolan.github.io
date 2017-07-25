$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});
(function() {
  var imageReveal,
    bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    };

  imageReveal = (function() {
    function imageReveal(el) {
      this.el = el;
      this.moveSplit = bind(this.moveSplit, this);
      this.calculateSplit = bind(this.calculateSplit, this);
      this.resetReveal = bind(this.resetReveal, this);
      this.startReveal = bind(this.startReveal, this);
      this._bindEvents = bind(this._bindEvents, this);
      this.overSlide = this.el.find('.js-over-slide');
      this.overImage = this.el.find('.js-over-image');
      this.divider = this.el.find('.js-divider');
      console.log(this.el);
      this._bindEvents();
      this.resetReveal();
    }

    imageReveal.prototype._bindEvents = function() {
      this.el.on('mouseenter', this.startReveal);
      return this.el.on('mouseleave', this.resetReveal);
    };

    imageReveal.prototype.startReveal = function() {
      console.log('start reveal');
      return this.el.on('mousemove', this.calculateSplit);
    };

    imageReveal.prototype.resetReveal = function() {
      var elMiddle;
      console.log('reset');
      this.el.off('mousemove', this.calculateSplit);
      elMiddle = this.el.width() / 2;
      return this.moveSplit(elMiddle);
    };

    imageReveal.prototype.calculateSplit = function(e) {
      var elOffset;
      elOffset = this.el.offset().left;
      return this.moveSplit(e.pageX - elOffset);
    };

    imageReveal.prototype.moveSplit = function(offset) {
      if (offset < 0) {
        offset = 0;
      }
      console.log(offset);
      this.overSlide.css('transform', 'translateX(' + offset + 'px)');
      this.overImage.css('transform', 'translateX(-' + offset + 'px)');
      return this.divider.css('transform', 'translateX(' + offset + 'px)');
    };

    return imageReveal;

  })();

  window.imageReveal = imageReveal;

  $(function() {
    return new imageReveal($('.js-image-reveal'));
  });

}).call(this);
