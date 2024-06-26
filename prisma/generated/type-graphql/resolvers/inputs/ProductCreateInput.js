"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutProductsInput_1 = require("../inputs/CategoryCreateNestedOneWithoutProductsInput");
const RatingCreateNestedOneWithoutProductInput_1 = require("../inputs/RatingCreateNestedOneWithoutProductInput");
const TransactionCreateNestedManyWithoutProductInput_1 = require("../inputs/TransactionCreateNestedManyWithoutProductInput");
const UserCreateNestedOneWithoutProductInput_1 = require("../inputs/UserCreateNestedOneWithoutProductInput");
let ProductCreateInput = class ProductCreateInput {
};
exports.ProductCreateInput = ProductCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedOneWithoutProductInput_1.RatingCreateNestedOneWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedOneWithoutProductInput_1.RatingCreateNestedOneWithoutProductInput)
], ProductCreateInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput)
], ProductCreateInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProductInput_1.UserCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutProductInput_1.UserCreateNestedOneWithoutProductInput)
], ProductCreateInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutProductInput_1.TransactionCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutProductInput_1.TransactionCreateNestedManyWithoutProductInput)
], ProductCreateInput.prototype, "Transaction", void 0);
exports.ProductCreateInput = ProductCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateInput", {})
], ProductCreateInput);
