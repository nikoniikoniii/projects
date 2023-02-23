Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _express = require('express');
const _AlunoController = require('../controllers/AlunoController');

const _AlunoController2 = _interopRequireDefault(_AlunoController);

const _loginRequired = require('../middlewares/loginRequired');

const _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _AlunoController2.default.index);
router.post('/', _loginRequired2.default, _AlunoController2.default.store);
router.put('/:id', _loginRequired2.default, _AlunoController2.default.update);
router.get('/:id', _AlunoController2.default.show);
router.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete);

exports.default = router;