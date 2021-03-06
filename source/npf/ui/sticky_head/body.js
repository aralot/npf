goog.provide('npf.ui.stickyHead.Body');

goog.require('npf.ui.RenderedComponent');
goog.require('npf.ui.stickyHead.BodyRenderer');


/**
 * @param {npf.ui.stickyHead.BodyRenderer=} opt_renderer Renderer used to render
 *                                          or decorate the component.
 * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for document
 *                                            interaction.
 * @constructor
 * @extends {npf.ui.RenderedComponent}
 */
npf.ui.stickyHead.Body = function(opt_renderer, opt_domHelper) {
	goog.base(this, opt_renderer ||
    npf.ui.stickyHead.BodyRenderer.getInstance(), opt_domHelper);
};
goog.inherits(npf.ui.stickyHead.Body, npf.ui.RenderedComponent);
