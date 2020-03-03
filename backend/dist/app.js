'use strict';

var _httpErrors = require('http-errors');

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _synonyms = require('./routes/synonyms');

var _synonyms2 = _interopRequireDefault(_synonyms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

// view engine setup
app.set('view engine', 'pug');
app.set('views', 'views');

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use('/', _index2.default);
app.use('/synonyms', _synonyms2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors2.default)(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var listener = app.listen(process.env.PORT || 3001);

module.exports = app;