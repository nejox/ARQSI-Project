"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
const AggregateRoot_1 = require("../core/domain/AggregateRoot");
const Guard_1 = require("../core/logic/Guard");
const Result_1 = require("../core/logic/Result");
const stationId_1 = require("./stationId");
class Station extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get stationId() {
        return stationId_1.StationId.caller(this.id);
    }
    get name() {
        return this.props.name;
    }
    get shortName() {
        return this.props.shortName;
    }
    get lat() {
        return this.props.lat;
    }
    get long() {
        return this.props.long;
    }
    get isDepot() {
        return this.props.isDepot;
    }
    get isReliefpoint() {
        return this.props.isReliefPoint;
    }
    get capacity() {
        return this.props.capacity;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardedProps = [
            { argument: props.name, argumentName: 'name' },
            { argument: props.shortName, argumentName: 'shortName' },
            { argument: props.lat, argumentName: 'lat' },
            { argument: props.long, argumentName: 'long' },
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardedProps);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            const station = new Station(Object.assign({}, props), id);
            return Result_1.Result.ok(station);
        }
    }
}
exports.Station = Station;
//# sourceMappingURL=station.js.map