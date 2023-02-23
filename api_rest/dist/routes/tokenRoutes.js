Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _express = require('express');
const _TokenController = require('../controllers/TokenController');

const _TokenController2 = _interopRequireDefault(_TokenController);

const router = new (0, _express.Router)();

router.post('/', _TokenController2.default.store);

exports.default = router;
