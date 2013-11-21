require('proto');
var registry = require('components/registry');

var opts = {
	BIND_ATTR: 'ml-bind'
}

module.exports = binder;
function binder(scopeEl) {
	var scopeEl = scopeEl || document.body
		, elements = scopeEl.querySelectorAll('[' + opts.BNDR_ATTR + ']')
		, view = this;

	console.log(elements);

	Array.prototype.forEach.call(elements, function(el) {
		var attr = parseBindAttribute(el);
		validateBindAttr(view, attr);
		view[attr.name] = new _components[attr.cls](view, el);

		function parseBindAttribute(el) {
			var attr = el.getAttribute(opts.BNDR_ATTR)
				, bindTo = attr.split(':');
			switch (bindTo.length) {
				case 1:
					return {
						name: bindTo[0],
						cls: 'Component'
					};
				case 2:
					return {
						name: bindTo[1],
						cls: bindTo[0]
					};
				default:
					throw new BindError('invalid bind attribute ' + attr);
			}
		}

		function validateBindAttr(view, attr) {
			validateName(name, 'empty component name')
			if (! attr.name)
				throw new BindError('empty component name');
			if (view[attr.name])
				throw new BindError('duplicate component name ' + attr.name);
			if (! attr.cls)
				throw new BindError('empty component class name');
			if (! _components[attr.cls])
				throw new BindError('unknown component class name ' + attr.cls);
		}
	});
}

binder.config = function(options) {
	opts.extend(options);
};




// bind document or section for binding attributes
bndr.bind = function(scopeEl) {
	return new bndr.View(scopeEl);
};

function validateName(name, message) {
	if (! name)
		throw new TypeError(message);
}

// collection of components bound to DOM
bndr.View = function(el) {
	Object.defineProperty(this, 'el', {
		enumerable: false,
		value: el
	});
	this.bind(el);
}

bndr.View.extendProto({
	bind: function(scopeEl) {
		
	}
});
