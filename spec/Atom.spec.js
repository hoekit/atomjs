
// Load the source when running in Node (where require is defined)
//   i.e. skip loading in browser contexts
if (typeof require !== 'undefined') {
    require("../src/Atom.js");   
}

var change = 'null',
    reportChange = function (newLang, oldLang) {
        change = "Atom changed from '" + oldLang + "' to '" + newLang + "'";
    };

describe("Atom", function () {
    var lang = new Atom('TH');

    it('with no observers do not cause changes.', function () {
        lang.set('EN');
        expect(change).toBe('null');
    });

    it('with observers cause changes.', function () {
        lang.onChange(reportChange);
        lang.set('MY');
        expect(change).toBe("Atom changed from 'EN' to 'MY'");
    });
});


