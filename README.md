# Atom.js

A simple class to support the Observer pattern.

    


# Example

    var lang = new Atom('EN');

    lang.set('MY');             // No observer, nothing reported

    // Create an observer
    var reporter = function (newLang, oldLang) {
        console.log("Atom changed from '" + oldLang + 
                                 "' to '" + newLang + "'");
    };
    lang.onChange(reporter);    // Add observer

    // Change the Atom
    lang.set('TH');             // Reports: Atom changed from 'MY' to 'TH'

    lang.ignore(reporter);      // Remove observer

    lang.set('Does not show.'); // No observer, nothing reported

