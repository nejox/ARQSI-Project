"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationId = void 0;
const ValueObject_1 = require("../core/domain/ValueObject");
const Guard_1 = require("../core/logic/Guard");
const Result_1 = require("../core/logic/Result");
class StationId extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(props) {
        const propsResult = Guard_1.Guard.againstNullOrUndefined(props.value, 'stationId');
        if (!propsResult.succeeded) {
            return Result_1.Result.fail(propsResult.message);
        }
        else {
            return Result_1.Result.ok(new StationId({
                value: props.value
            }));
        }
    }
}
exports.StationId = StationId;
//# sourceMappingURL=stationId.js.map