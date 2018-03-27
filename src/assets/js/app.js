import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// included JS libraries
require('./jquery.autocomplete.js');
require('./jquery-ui.min.js');
require('./slick.js');

$(document).foundation();