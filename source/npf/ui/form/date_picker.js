goog.provide('npf.ui.form.DatePicker');

goog.require('goog.date.Date');
goog.require('goog.events.EventType');
goog.require('goog.math');
goog.require('npf.ui.form.DatePickerRenderer');
goog.require('npf.ui.form.Field');


/**
 * @param {string} name
 * @param {npf.ui.form.DatePickerRenderer=} opt_renderer
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {npf.ui.form.Field}
 */
npf.ui.form.DatePicker = function(name, opt_renderer, opt_domHelper) {
  var renderer = opt_renderer || npf.ui.form.DatePickerRenderer.getInstance();

  goog.base(this, name, renderer, opt_domHelper);

  this.addClassName(renderer.getFieldCssClass());

  this.maxDate_ = new goog.date.Date();
  this.minDate_ = new goog.date.Date(1901, 1, 1);
};
goog.inherits(npf.ui.form.DatePicker, npf.ui.form.Field);


/**
 * @private {number?}
 */
npf.ui.form.DatePicker.prototype.day_ = null;

/**
 * @private {boolean}
 */
npf.ui.form.DatePicker.prototype.emptyValue_ = false;

/**
 * @private {goog.date.Date}
 */
npf.ui.form.DatePicker.prototype.maxDate_;

/**
 * @private {goog.date.Date}
 */
npf.ui.form.DatePicker.prototype.minDate_;

/**
 * @private {number?}
 */
npf.ui.form.DatePicker.prototype.month_ = null;

/**
 * @private {number?}
 */
npf.ui.form.DatePicker.prototype.year_ = null;


/** @inheritDoc */
npf.ui.form.DatePicker.prototype.enterDocument = function() {
  /** @type {Element} */
  var dayElement = this.getDayElement();
  /** @type {Element} */
  var monthElement = this.getDayElement();
  /** @type {Element} */
  var yearElement = this.getDayElement();
  var EventType = goog.events.EventType;

  if (dayElement) {
    this.getHandler().listen(dayElement, EventType.CHANGE, this.onChange_);
  }

  if (monthElement) {
    this.getHandler().listen(monthElement, EventType.CHANGE, this.onChange_);
  }

  if (yearElement) {
    this.getHandler().listen(yearElement, EventType.CHANGE, this.onChange_);
  }
};

/** @inheritDoc */
npf.ui.form.DatePicker.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');

  this.maxDate_ = null;
  this.minDate_ = null;
};

/** @inheritDoc */
npf.ui.form.DatePicker.prototype.isEmpty = function() {
  return goog.isNull(this.getYear()) || goog.isNull(this.getMonth()) ||
    goog.isNull(this.getDay());
};

/**
 * @return {string}
 * @override
 */
npf.ui.form.DatePicker.prototype.getRequestValue = function() {
  /** @type {!Array.<number?>} */
  var value = this.getValue();

  return [
    goog.isNumber(value[0]) ? value[0] : '',
    goog.isNumber(value[1]) ? value[1] : '',
    goog.isNumber(value[2]) ? value[2] : ''
  ].join('-');
};

/**
 * @return {!Array.<number?>}
 * @override
 */
npf.ui.form.DatePicker.prototype.getValue = function() {
  return [this.getYear(), this.getMonth(), this.getDay()];
};

/**
 * @return {!Array.<number?>}
 * @override
 */
npf.ui.form.DatePicker.prototype.getValueFromElement = function() {
  return /** @type {!Array.<number?>} */ (
    goog.base(this, 'getValueFromElement'));
};

/** @inheritDoc */
npf.ui.form.DatePicker.prototype.setValueInternal = function(value) {
  var values = /** @type {!Array.<number?>} */ (value);
  this.day_   = values[2];
  this.month_ = values[1];
  this.year_  = values[0];

  goog.base(this, 'setValueInternal', value);
};

/** @inheritDoc */
npf.ui.form.DatePicker.prototype.correctValue = function(value) {
  /** @type {!Array.<number?>} */
  var result = [null, null, null];

  if (
    goog.isArray(value) &&
    (goog.isNull(value[0]) || goog.isNumber(value[0])) &&
    (goog.isNull(value[1]) || goog.isNumber(value[1])) &&
    (goog.isNull(value[2]) || goog.isNumber(value[2]))
  ) {
    /** @type {goog.date.Date} */
    var maxDate = this.getMaxDate();
    /** @type {goog.date.Date} */
    var minDate = this.getMinDate();
    var possibleValue = /** @type {!Array.<number?>} */ (value);
    /** @type {number} */
    var minYear = minDate.getFullYear();
    /** @type {number} */
    var maxYear = maxDate.getFullYear();
    /** @type {number} */
    var minMonth = minDate.getMonth() + 1;
    /** @type {number} */
    var maxMonth = maxDate.getMonth() + 1;
    /** @type {number} */
    var minDay = minDate.getDate();
    /** @type {number} */
    var maxDay = maxDate.getDate();

    if (possibleValue[0] && possibleValue[1] && possibleValue[2]) {
      var date = new goog.date.Date(
        /** @type {number} */ (possibleValue[0]),
        /** @type {number} */ (possibleValue[1]) - 1,
        /** @type {number} */ (possibleValue[2])
      );

      if (0 > goog.date.Date.compare(date, minDate)) {
        result = [minYear, minMonth, minDay];
      } else if (0 < goog.date.Date.compare(date, maxDate)) {
        result = [maxYear, maxMonth, maxDay];
      }
    } else {
      if (possibleValue[0]) {
        result[0] = goog.math.clamp(
          /** @type {number} */ (possibleValue[0]), minYear, maxYear);
      }

      if (possibleValue[1]) {
        result[1] = goog.math.clamp(
          /** @type {number} */ (possibleValue[1]), 1, 12);

        if (result[0] && result[0] == minYear) {
          result[1] = Math.max(result[1], minMonth);
        } else if (result[0] && result[0] == maxYear) {
          result[1] = Math.min(result[1], maxMonth);
        }
      }

      if (possibleValue[2]) {
        result[2] = goog.math.clamp(
          /** @type {number} */ (possibleValue[2]), 1, (
            new Date(result[0] || 2000, (result[1] || 0) + 1, 0)
          ).getDate()
        );

        if (result[0] === minYear && result[1] === minMonth) {
          result[2] = Math.max(possibleValue[2], minDay);
        } else if (result[0] === maxYear && result[1] === maxMonth) {
          result[2] = Math.min(possibleValue[2], maxDay);
        }
      }
    }
  }

  return result;
};

/** @inheritDoc */
npf.ui.form.DatePicker.prototype.equalsValue = function(value) {
  return goog.isArray(value) && this.getYear() === value[0] &&
    this.getMonth() === value[1] && this.getDay() === value[2];
};

/**
 * @return {number?}
 */
npf.ui.form.DatePicker.prototype.getDay = function() {
  return this.day_;
};

/**
 * @return {number?}
 */
npf.ui.form.DatePicker.prototype.getMonth = function() {
  return this.month_;
};

/**
 * @return {number?}
 */
npf.ui.form.DatePicker.prototype.getYear = function() {
  return this.year_;
};

/**
 * @return {boolean}
 */
npf.ui.form.DatePicker.prototype.isEmptyValue = function() {
  return this.emptyValue_;
};

/**
 * @param {boolean} isEmpty
 */
npf.ui.form.DatePicker.prototype.setEmptyValue = function(isEmpty) {
  this.emptyValue_ = isEmpty;
};

/**
 * @return {goog.date.Date}
 */
npf.ui.form.DatePicker.prototype.getMaxDate = function() {
  return this.maxDate_;
};

/**
 * @param {goog.date.Date} maxDate
 */
npf.ui.form.DatePicker.prototype.setMaxDate = function(maxDate) {
  this.maxDate_ = maxDate;

  this.setValue(this.getValue());
};

/**
 * @return {goog.date.Date}
 */
npf.ui.form.DatePicker.prototype.getMinDate = function() {
  return this.minDate_;
};

/**
 * @param {goog.date.Date} minDate
 */
npf.ui.form.DatePicker.prototype.setMinDate = function(minDate) {
  this.minDate_ = minDate;

  this.setValue(this.getValue());
};

/**
 * @return {Element}
 */
npf.ui.form.DatePicker.prototype.getDayElement = function() {
  var renderer = /** @type {npf.ui.form.DatePickerRenderer} */ (
    this.getRenderer());

  return renderer.getDayElement(this.getElement());
};

/**
 * @return {Element}
 */
npf.ui.form.DatePicker.prototype.getMonthElement = function() {
  var renderer = /** @type {npf.ui.form.DatePickerRenderer} */ (
    this.getRenderer());

  return renderer.getMonthElement(this.getElement());
};

/**
 * @return {Element}
 */
npf.ui.form.DatePicker.prototype.getYearElement = function() {
  var renderer = /** @type {npf.ui.form.DatePickerRenderer} */ (
    this.getRenderer());

  return renderer.getYearElement(this.getElement());
};

/**
 * @param {goog.events.BrowserEvent} evt
 * @private
 */
npf.ui.form.DatePicker.prototype.onChange_ = function(evt) {
  /** @type {!Array.<number?>} */
  var value = this.getValueFromElement();
  this.setValue(value);
};
