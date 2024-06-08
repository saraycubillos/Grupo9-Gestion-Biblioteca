"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductAvgAggregate = class ProductAvgAggregate {
};
exports.ProductAvgAggregate = ProductAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductAvgAggregate.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductAvgAggregate.prototype, "balance", void 0);
exports.ProductAvgAggregate = ProductAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductAvgAggregate", {})
], ProductAvgAggregate);
