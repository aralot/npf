goog.provide('npf.ui.form.FieldRenderer');

goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('npf.ui.StatedRenderer');


/**
 * @constructor
 * @extends {npf.ui.StatedRenderer}
 */
npf.ui.form.FieldRenderer = function() {
  goog.base(this);
};
goog.inherits(npf.ui.form.FieldRenderer, npf.ui.StatedRenderer);
goog.addSingletonGetter(npf.ui.form.FieldRenderer);


/**
 * @type {string}
 */
npf.ui.form.FieldRenderer.CSS_CLASS = goog.getCssName('npf-formField');


/** @inheritDoc */
npf.ui.form.FieldRenderer.prototype.getCssClass = function() {
  return npf.ui.form.FieldRenderer.CSS_CLASS;
};

/** @inheritDoc */
npf.ui.form.FieldRenderer.prototype.createDom = function(component) {
  /** @type {Element} */
  var element = goog.base(this, 'createDom', component);
  /** @type {!Element} */
  var labelContainerElement = component.getDomHelper().createDom(
    goog.dom.TagName.DIV, this.getLabelContainerCssClass());
  /** @type {string} */
  var labelContent = component.getLabel();

  if ('' != labelContent) {
    /** @type {!Element} */
    var labelElement = component.getDomHelper().createDom(
      goog.dom.TagName.DIV, this.getLabelCssClass());
    labelElement.innerHTML = labelContent;
    goog.dom.appendChild(labelContainerElement, labelElement);
  }

  goog.dom.appendChild(element, labelContainerElement);

  /** @type {!Element} */
  var contentElement = component.getDomHelper().createDom(
    goog.dom.TagName.DIV, this.getContentCssClass());
  goog.dom.appendChild(element, contentElement);

  /** @type {!Element} */
  var errorElement = component.getDomHelper().createDom(
    goog.dom.TagName.DIV, this.getErrorCssClass(), component.getError());
  goog.dom.appendChild(element, errorElement);

  /** @type {string} */
  var notice = component.getNotice();

  if ('' != notice) {
    /** @type {!Element} */
    var noticeElement = component.getDomHelper().createDom(
      goog.dom.TagName.DIV, this.getNoticeCssClass());
    noticeElement.innerHTML = notice;
    goog.dom.appendChild(element, noticeElement);
  }

  return element;
};

/** @inheritDoc */
npf.ui.form.FieldRenderer.prototype.getContentElement = function(element) {
  return this.getElementByClass(this.getContentCssClass(), element);
};

/**
 * @param {Element} element
 * @param {boolean} visible
 */
npf.ui.form.FieldRenderer.prototype.setErrorVisible = function(element,
                                                               visible) {
  if (element) {
    goog.dom.classes.enable(element, this.getErrorStateCssClass(), visible);
  }
};

/**
 * @param {Element} element
 * @param {string} content
 */
npf.ui.form.FieldRenderer.prototype.setContent = function(element, content) {
  if (element) {
    element.innerHTML = content;
  }
};

/**
 * @param {Element} element
 * @param {*} value
 */
npf.ui.form.FieldRenderer.prototype.setValue = function(element, value) {
  if (element) {
    goog.dom.forms.setValue(element, value);
  }
};

/**
 * @param {Element} element
 */
npf.ui.form.FieldRenderer.prototype.focus = function(element) {
  if (element) {
    element.focus();
  }
};

/**
 * @param {Element} element
 */
npf.ui.form.FieldRenderer.prototype.focusAndSelect = function(element) {
  if (element) {
    goog.dom.forms.focusAndSelect(element);
  }
};

/**
 * @param {Element} element
 * @return {string|Array.<string>|null}
 */
npf.ui.form.FieldRenderer.prototype.getValue = function(element) {
  if (element) {
    return goog.dom.forms.getValue(element);
  }

  return null;
};

/**
 * @param {Element} element
 * @return {Element}
 */
npf.ui.form.FieldRenderer.prototype.getLabelContainerElement = function(
    element) {
  return this.getElementByClass(this.getLabelContainerCssClass(), element);
};

/**
 * @param {Element} element
 * @return {Element}
 */
npf.ui.form.FieldRenderer.prototype.getLabelElement = function(element) {
  return this.getElementByClass(this.getLabelCssClass(), element);
};

/**
 * @param {Element} element
 * @return {Element}
 */
npf.ui.form.FieldRenderer.prototype.getNoticeElement = function(element) {
  return this.getElementByClass(this.getNoticeCssClass(), element);
};

/**
 * @param {Element} element
 * @return {Element}
 */
npf.ui.form.FieldRenderer.prototype.getErrorElement = function(element) {
  return this.getElementByClass(this.getErrorCssClass(), element);
};

/**
 * @param {Element} element
 * @return {Element}
 */
npf.ui.form.FieldRenderer.prototype.getValueElement = function(element) {
  return this.getElementByClass(this.getValueCssClass(), element);
};

/**
 * @return {string}
 */
npf.ui.form.FieldRenderer.prototype.getErrorStateCssClass = function() {
  return goog.getCssName(this.getStructuralCssClass(), 'errorState');
};

/**
 * @return {string}
 */
npf.ui.form.FieldRenderer.prototype.getErrorCssClass = function() {
  return goog.getCssName(this.getStructuralCssClass(), 'error');
};

/**
 * @return {string}
 */
npf.ui.form.FieldRenderer.prototype.getLabelContainerCssClass = function() {
  return goog.getCssName(this.getStructuralCssClass(), 'labelContainer');
};

/**
 * @return {string}
 */
npf.ui.form.FieldRenderer.prototype.getLabelCssClass = function() {
  return goog.getCssName(this.getStructuralCssClass(), 'label');
};

/**
 * @return {string}
 */
npf.ui.form.FieldRenderer.prototype.getContentCssClass = function() {
  return goog.getCssName(this.getStructuralCssClass(), 'content');
};

/**
 * @return {string}
 */
npf.ui.form.FieldRenderer.prototype.getValueCssClass = function() {
  return goog.getCssName(this.getStructuralCssClass(), 'value');
};

/**
 * @return {string}
 */
npf.ui.form.FieldRenderer.prototype.getNoticeCssClass = function() {
  return goog.getCssName(this.getStructuralCssClass(), 'notice');
};