import { _ as _ts_generator } from "@swc/helpers/_/_ts_generator";
function test() {
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                if (!!False()) return [
                    3,
                    2
                ];
                // execute this line
                while(!False()){
                    // execute this line
                    return [
                        3,
                        2
                    ];
                }
                // execute this line
                if (False()) {
                    // NOT execute this line
                    return [
                        3,
                        2
                    ];
                }
                // execute this line
                return [
                    4,
                    "correct"
                ];
            case 1:
                _state.sent();
                return [
                    2
                ];
            case 2:
                // NOT execute this line
                return [
                    4,
                    "wrong"
                ];
            case 3:
                _state.sent();
                return [
                    2
                ];
        }
    });
}
function False() {
    return false;
}
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    for(var _iterator = test()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
        var result = _step.value;
        console.log(result);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

