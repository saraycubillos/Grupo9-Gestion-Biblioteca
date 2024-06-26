"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Product: crudResolvers.ProductCrudResolver,
    Category: crudResolvers.CategoryCrudResolver,
    Rating: crudResolvers.RatingCrudResolver,
    Transaction: crudResolvers.TransactionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver
};
const actionResolversMap = {
    Product: {
        aggregateProduct: actionResolvers.AggregateProductResolver,
        createManyProduct: actionResolvers.CreateManyProductResolver,
        createOneProduct: actionResolvers.CreateOneProductResolver,
        deleteManyProduct: actionResolvers.DeleteManyProductResolver,
        deleteOneProduct: actionResolvers.DeleteOneProductResolver,
        findFirstProduct: actionResolvers.FindFirstProductResolver,
        findFirstProductOrThrow: actionResolvers.FindFirstProductOrThrowResolver,
        products: actionResolvers.FindManyProductResolver,
        product: actionResolvers.FindUniqueProductResolver,
        getProduct: actionResolvers.FindUniqueProductOrThrowResolver,
        groupByProduct: actionResolvers.GroupByProductResolver,
        updateManyProduct: actionResolvers.UpdateManyProductResolver,
        updateOneProduct: actionResolvers.UpdateOneProductResolver,
        upsertOneProduct: actionResolvers.UpsertOneProductResolver
    },
    Category: {
        aggregateCategory: actionResolvers.AggregateCategoryResolver,
        createManyCategory: actionResolvers.CreateManyCategoryResolver,
        createOneCategory: actionResolvers.CreateOneCategoryResolver,
        deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
        deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
        findFirstCategory: actionResolvers.FindFirstCategoryResolver,
        findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
        categories: actionResolvers.FindManyCategoryResolver,
        category: actionResolvers.FindUniqueCategoryResolver,
        getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
        groupByCategory: actionResolvers.GroupByCategoryResolver,
        updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
        updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
        upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
    },
    Rating: {
        aggregateRating: actionResolvers.AggregateRatingResolver,
        createManyRating: actionResolvers.CreateManyRatingResolver,
        createOneRating: actionResolvers.CreateOneRatingResolver,
        deleteManyRating: actionResolvers.DeleteManyRatingResolver,
        deleteOneRating: actionResolvers.DeleteOneRatingResolver,
        findFirstRating: actionResolvers.FindFirstRatingResolver,
        findFirstRatingOrThrow: actionResolvers.FindFirstRatingOrThrowResolver,
        ratings: actionResolvers.FindManyRatingResolver,
        rating: actionResolvers.FindUniqueRatingResolver,
        getRating: actionResolvers.FindUniqueRatingOrThrowResolver,
        groupByRating: actionResolvers.GroupByRatingResolver,
        updateManyRating: actionResolvers.UpdateManyRatingResolver,
        updateOneRating: actionResolvers.UpdateOneRatingResolver,
        upsertOneRating: actionResolvers.UpsertOneRatingResolver
    },
    Transaction: {
        aggregateTransaction: actionResolvers.AggregateTransactionResolver,
        createManyTransaction: actionResolvers.CreateManyTransactionResolver,
        createOneTransaction: actionResolvers.CreateOneTransactionResolver,
        deleteManyTransaction: actionResolvers.DeleteManyTransactionResolver,
        deleteOneTransaction: actionResolvers.DeleteOneTransactionResolver,
        findFirstTransaction: actionResolvers.FindFirstTransactionResolver,
        findFirstTransactionOrThrow: actionResolvers.FindFirstTransactionOrThrowResolver,
        transactions: actionResolvers.FindManyTransactionResolver,
        transaction: actionResolvers.FindUniqueTransactionResolver,
        getTransaction: actionResolvers.FindUniqueTransactionOrThrowResolver,
        groupByTransaction: actionResolvers.GroupByTransactionResolver,
        updateManyTransaction: actionResolvers.UpdateManyTransactionResolver,
        updateOneTransaction: actionResolvers.UpdateOneTransactionResolver,
        upsertOneTransaction: actionResolvers.UpsertOneTransactionResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Account: {
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        createOneAccount: actionResolvers.CreateOneAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        account: actionResolvers.FindUniqueAccountResolver,
        getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        updateOneAccount: actionResolvers.UpdateOneAccountResolver,
        upsertOneAccount: actionResolvers.UpsertOneAccountResolver
    },
    Session: {
        aggregateSession: actionResolvers.AggregateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        createOneSession: actionResolvers.CreateOneSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        deleteOneSession: actionResolvers.DeleteOneSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
        sessions: actionResolvers.FindManySessionResolver,
        session: actionResolvers.FindUniqueSessionResolver,
        getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
        groupBySession: actionResolvers.GroupBySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        updateOneSession: actionResolvers.UpdateOneSessionResolver,
        upsertOneSession: actionResolvers.UpsertOneSessionResolver
    },
    VerificationToken: {
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
        upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
    }
};
const crudResolversInfo = {
    Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
    Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
    Rating: ["aggregateRating", "createManyRating", "createOneRating", "deleteManyRating", "deleteOneRating", "findFirstRating", "findFirstRatingOrThrow", "ratings", "rating", "getRating", "groupByRating", "updateManyRating", "updateOneRating", "upsertOneRating"],
    Transaction: ["aggregateTransaction", "createManyTransaction", "createOneTransaction", "deleteManyTransaction", "deleteOneTransaction", "findFirstTransaction", "findFirstTransactionOrThrow", "transactions", "transaction", "getTransaction", "groupByTransaction", "updateManyTransaction", "updateOneTransaction", "upsertOneTransaction"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
    VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"]
};
const argsInfo = {
    AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyProductArgs: ["data", "skipDuplicates"],
    CreateOneProductArgs: ["data"],
    DeleteManyProductArgs: ["where"],
    DeleteOneProductArgs: ["where"],
    FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstProductOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProductArgs: ["where"],
    FindUniqueProductOrThrowArgs: ["where"],
    GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProductArgs: ["data", "where"],
    UpdateOneProductArgs: ["data", "where"],
    UpsertOneProductArgs: ["where", "create", "update"],
    AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCategoryArgs: ["data", "skipDuplicates"],
    CreateOneCategoryArgs: ["data"],
    DeleteManyCategoryArgs: ["where"],
    DeleteOneCategoryArgs: ["where"],
    FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCategoryArgs: ["where"],
    FindUniqueCategoryOrThrowArgs: ["where"],
    GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCategoryArgs: ["data", "where"],
    UpdateOneCategoryArgs: ["data", "where"],
    UpsertOneCategoryArgs: ["where", "create", "update"],
    AggregateRatingArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyRatingArgs: ["data", "skipDuplicates"],
    CreateOneRatingArgs: ["data"],
    DeleteManyRatingArgs: ["where"],
    DeleteOneRatingArgs: ["where"],
    FindFirstRatingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstRatingOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRatingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueRatingArgs: ["where"],
    FindUniqueRatingOrThrowArgs: ["where"],
    GroupByRatingArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyRatingArgs: ["data", "where"],
    UpdateOneRatingArgs: ["data", "where"],
    UpsertOneRatingArgs: ["where", "create", "update"],
    AggregateTransactionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTransactionArgs: ["data", "skipDuplicates"],
    CreateOneTransactionArgs: ["data"],
    DeleteManyTransactionArgs: ["where"],
    DeleteOneTransactionArgs: ["where"],
    FindFirstTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTransactionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTransactionArgs: ["where"],
    FindUniqueTransactionOrThrowArgs: ["where"],
    GroupByTransactionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTransactionArgs: ["data", "where"],
    UpdateOneTransactionArgs: ["data", "where"],
    UpsertOneTransactionArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    CreateOneAccountArgs: ["data"],
    DeleteManyAccountArgs: ["where"],
    DeleteOneAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAccountArgs: ["where"],
    FindUniqueAccountOrThrowArgs: ["where"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAccountArgs: ["data", "where"],
    UpdateOneAccountArgs: ["data", "where"],
    UpsertOneAccountArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    CreateOneSessionArgs: ["data"],
    DeleteManySessionArgs: ["where"],
    DeleteOneSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSessionArgs: ["where"],
    FindUniqueSessionOrThrowArgs: ["where"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySessionArgs: ["data", "where"],
    UpdateOneSessionArgs: ["data", "where"],
    UpsertOneSessionArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    CreateOneVerificationTokenArgs: ["data"],
    DeleteManyVerificationTokenArgs: ["where"],
    DeleteOneVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindUniqueVerificationTokenOrThrowArgs: ["where"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpdateOneVerificationTokenArgs: ["data", "where"],
    UpsertOneVerificationTokenArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Product: relationResolvers.ProductRelationsResolver,
    Category: relationResolvers.CategoryRelationsResolver,
    Rating: relationResolvers.RatingRelationsResolver,
    Transaction: relationResolvers.TransactionRelationsResolver,
    User: relationResolvers.UserRelationsResolver,
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver
};
const relationResolversInfo = {
    Product: ["rating", "category", "creator", "Transaction"],
    Category: ["products"],
    Rating: ["product"],
    Transaction: ["user", "product"],
    User: ["accounts", "sessions", "Product", "Transaction"],
    Account: ["user"],
    Session: ["user"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Product: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    Category: ["id", "name", "description", "createdAt", "updatedAt"],
    Rating: ["id", "rate", "count", "productId", "createdAt", "updatedAt"],
    Transaction: ["id", "amount", "userId", "productId", "type", "createdAt"],
    User: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    Account: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    Session: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationToken: ["identifier", "token", "expires"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
    ProductGroupBy: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCategory: ["_count", "_min", "_max"],
    CategoryGroupBy: ["id", "name", "description", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateRating: ["_count", "_avg", "_sum", "_min", "_max"],
    RatingGroupBy: ["id", "rate", "count", "productId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTransaction: ["_count", "_avg", "_sum", "_min", "_max"],
    TransactionGroupBy: ["id", "amount", "userId", "productId", "type", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "_count", "_min", "_max"],
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    ProductCount: ["Transaction"],
    ProductCountAggregate: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt", "_all"],
    ProductAvgAggregate: ["price", "balance"],
    ProductSumAggregate: ["price", "balance"],
    ProductMinAggregate: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    ProductMaxAggregate: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    CategoryCount: ["products"],
    CategoryCountAggregate: ["id", "name", "description", "createdAt", "updatedAt", "_all"],
    CategoryMinAggregate: ["id", "name", "description", "createdAt", "updatedAt"],
    CategoryMaxAggregate: ["id", "name", "description", "createdAt", "updatedAt"],
    RatingCountAggregate: ["id", "rate", "count", "productId", "createdAt", "updatedAt", "_all"],
    RatingAvgAggregate: ["rate", "count"],
    RatingSumAggregate: ["rate", "count"],
    RatingMinAggregate: ["id", "rate", "count", "productId", "createdAt", "updatedAt"],
    RatingMaxAggregate: ["id", "rate", "count", "productId", "createdAt", "updatedAt"],
    TransactionCountAggregate: ["id", "amount", "userId", "productId", "type", "createdAt", "_all"],
    TransactionAvgAggregate: ["amount"],
    TransactionSumAggregate: ["amount"],
    TransactionMinAggregate: ["id", "amount", "userId", "productId", "type", "createdAt"],
    TransactionMaxAggregate: ["id", "amount", "userId", "productId", "type", "createdAt"],
    UserCount: ["accounts", "sessions", "Product", "Transaction"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "_all"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    AccountCountAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCountAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_all"],
    SessionMinAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMaxAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    ProductWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt", "rating", "category", "creator", "Transaction"],
    ProductOrderByWithRelationInput: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt", "rating", "category", "creator", "Transaction"],
    ProductWhereUniqueInput: ["id", "AND", "OR", "NOT", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt", "rating", "category", "creator", "Transaction"],
    ProductOrderByWithAggregationInput: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    CategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt", "products"],
    CategoryOrderByWithRelationInput: ["id", "name", "description", "createdAt", "updatedAt", "products"],
    CategoryWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "description", "createdAt", "updatedAt", "products"],
    CategoryOrderByWithAggregationInput: ["id", "name", "description", "createdAt", "updatedAt", "_count", "_max", "_min"],
    CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt"],
    RatingWhereInput: ["AND", "OR", "NOT", "id", "rate", "count", "productId", "createdAt", "updatedAt", "product"],
    RatingOrderByWithRelationInput: ["id", "rate", "count", "productId", "createdAt", "updatedAt", "product"],
    RatingWhereUniqueInput: ["id", "productId", "AND", "OR", "NOT", "rate", "count", "createdAt", "updatedAt", "product"],
    RatingOrderByWithAggregationInput: ["id", "rate", "count", "productId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    RatingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "rate", "count", "productId", "createdAt", "updatedAt"],
    TransactionWhereInput: ["AND", "OR", "NOT", "id", "amount", "userId", "productId", "type", "createdAt", "user", "product"],
    TransactionOrderByWithRelationInput: ["id", "amount", "userId", "productId", "type", "createdAt", "user", "product"],
    TransactionWhereUniqueInput: ["id", "AND", "OR", "NOT", "amount", "userId", "productId", "type", "createdAt", "user", "product"],
    TransactionOrderByWithAggregationInput: ["id", "amount", "userId", "productId", "type", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
    TransactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "amount", "userId", "productId", "type", "createdAt"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Product", "Transaction"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Product", "Transaction"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Product", "Transaction"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    AccountWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountOrderByWithRelationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountWhereUniqueInput: ["provider_providerAccountId", "AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountOrderByWithAggregationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionWhereInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionOrderByWithRelationInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionWhereUniqueInput: ["sessionToken", "AND", "OR", "NOT", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionOrderByWithAggregationInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["identifier_token", "AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    ProductCreateInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "rating", "category", "creator", "Transaction"],
    ProductUpdateInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "rating", "category", "creator", "Transaction"],
    ProductCreateManyInput: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    ProductUpdateManyMutationInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt"],
    CategoryCreateInput: ["id", "name", "description", "createdAt", "updatedAt", "products"],
    CategoryUpdateInput: ["id", "name", "description", "createdAt", "updatedAt", "products"],
    CategoryCreateManyInput: ["id", "name", "description", "createdAt", "updatedAt"],
    CategoryUpdateManyMutationInput: ["id", "name", "description", "createdAt", "updatedAt"],
    RatingCreateInput: ["id", "rate", "count", "createdAt", "updatedAt", "product"],
    RatingUpdateInput: ["id", "rate", "count", "createdAt", "updatedAt", "product"],
    RatingCreateManyInput: ["id", "rate", "count", "productId", "createdAt", "updatedAt"],
    RatingUpdateManyMutationInput: ["id", "rate", "count", "createdAt", "updatedAt"],
    TransactionCreateInput: ["id", "amount", "type", "createdAt", "user", "product"],
    TransactionUpdateInput: ["id", "amount", "type", "createdAt", "user", "product"],
    TransactionCreateManyInput: ["id", "amount", "userId", "productId", "type", "createdAt"],
    TransactionUpdateManyMutationInput: ["id", "amount", "type", "createdAt"],
    UserCreateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Product", "Transaction"],
    UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Product", "Transaction"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    AccountCreateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountUpdateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountCreateManyInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCreateInput: ["sessionToken", "expires", "createdAt", "updatedAt", "user"],
    SessionUpdateInput: ["sessionToken", "expires", "createdAt", "updatedAt", "user"],
    SessionCreateManyInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionUpdateManyMutationInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    RatingNullableRelationFilter: ["is", "isNot"],
    CategoryNullableRelationFilter: ["is", "isNot"],
    UserRelationFilter: ["is", "isNot"],
    TransactionListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    TransactionOrderByRelationAggregateInput: ["_count"],
    ProductCountOrderByAggregateInput: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    ProductAvgOrderByAggregateInput: ["price", "balance"],
    ProductMaxOrderByAggregateInput: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    ProductMinOrderByAggregateInput: ["id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    ProductSumOrderByAggregateInput: ["price", "balance"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    ProductListRelationFilter: ["every", "some", "none"],
    ProductOrderByRelationAggregateInput: ["_count"],
    CategoryCountOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt"],
    CategoryMaxOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt"],
    CategoryMinOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ProductRelationFilter: ["is", "isNot"],
    RatingCountOrderByAggregateInput: ["id", "rate", "count", "productId", "createdAt", "updatedAt"],
    RatingAvgOrderByAggregateInput: ["rate", "count"],
    RatingMaxOrderByAggregateInput: ["id", "rate", "count", "productId", "createdAt", "updatedAt"],
    RatingMinOrderByAggregateInput: ["id", "rate", "count", "productId", "createdAt", "updatedAt"],
    RatingSumOrderByAggregateInput: ["rate", "count"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    TransactionCountOrderByAggregateInput: ["id", "amount", "userId", "productId", "type", "createdAt"],
    TransactionAvgOrderByAggregateInput: ["amount"],
    TransactionMaxOrderByAggregateInput: ["id", "amount", "userId", "productId", "type", "createdAt"],
    TransactionMinOrderByAggregateInput: ["id", "amount", "userId", "productId", "type", "createdAt"],
    TransactionSumOrderByAggregateInput: ["amount"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountMinOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    SessionCountOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMaxOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMinOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    RatingCreateNestedOneWithoutProductInput: ["create", "connectOrCreate", "connect"],
    CategoryCreateNestedOneWithoutProductsInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutProductInput: ["create", "connectOrCreate", "connect"],
    TransactionCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    RatingUpdateOneWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    CategoryUpdateOneWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    UserUpdateOneRequiredWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TransactionUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProductCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProductUpdateManyWithoutCategoryNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProductCreateNestedOneWithoutRatingInput: ["create", "connectOrCreate", "connect"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    ProductUpdateOneRequiredWithoutRatingNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutTransactionInput: ["create", "connectOrCreate", "connect"],
    ProductCreateNestedOneWithoutTransactionInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutTransactionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProductUpdateOneRequiredWithoutTransactionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProductCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
    TransactionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProductUpdateManyWithoutCreatorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TransactionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    RatingCreateWithoutProductInput: ["id", "rate", "count", "createdAt", "updatedAt"],
    RatingCreateOrConnectWithoutProductInput: ["where", "create"],
    CategoryCreateWithoutProductsInput: ["id", "name", "description", "createdAt", "updatedAt"],
    CategoryCreateOrConnectWithoutProductsInput: ["where", "create"],
    UserCreateWithoutProductInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Transaction"],
    UserCreateOrConnectWithoutProductInput: ["where", "create"],
    TransactionCreateWithoutProductInput: ["id", "amount", "type", "createdAt", "user"],
    TransactionCreateOrConnectWithoutProductInput: ["where", "create"],
    TransactionCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
    RatingUpsertWithoutProductInput: ["update", "create", "where"],
    RatingUpdateToOneWithWhereWithoutProductInput: ["where", "data"],
    RatingUpdateWithoutProductInput: ["id", "rate", "count", "createdAt", "updatedAt"],
    CategoryUpsertWithoutProductsInput: ["update", "create", "where"],
    CategoryUpdateToOneWithWhereWithoutProductsInput: ["where", "data"],
    CategoryUpdateWithoutProductsInput: ["id", "name", "description", "createdAt", "updatedAt"],
    UserUpsertWithoutProductInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutProductInput: ["where", "data"],
    UserUpdateWithoutProductInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Transaction"],
    TransactionUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
    TransactionUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
    TransactionUpdateManyWithWhereWithoutProductInput: ["where", "data"],
    TransactionScalarWhereInput: ["AND", "OR", "NOT", "id", "amount", "userId", "productId", "type", "createdAt"],
    ProductCreateWithoutCategoryInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "rating", "creator", "Transaction"],
    ProductCreateOrConnectWithoutCategoryInput: ["where", "create"],
    ProductCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
    ProductUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
    ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "price", "image", "categoryId", "userId", "balance", "createdAt", "updatedAt"],
    ProductCreateWithoutRatingInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "category", "creator", "Transaction"],
    ProductCreateOrConnectWithoutRatingInput: ["where", "create"],
    ProductUpsertWithoutRatingInput: ["update", "create", "where"],
    ProductUpdateToOneWithWhereWithoutRatingInput: ["where", "data"],
    ProductUpdateWithoutRatingInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "category", "creator", "Transaction"],
    UserCreateWithoutTransactionInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Product"],
    UserCreateOrConnectWithoutTransactionInput: ["where", "create"],
    ProductCreateWithoutTransactionInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "rating", "category", "creator"],
    ProductCreateOrConnectWithoutTransactionInput: ["where", "create"],
    UserUpsertWithoutTransactionInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutTransactionInput: ["where", "data"],
    UserUpdateWithoutTransactionInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "sessions", "Product"],
    ProductUpsertWithoutTransactionInput: ["update", "create", "where"],
    ProductUpdateToOneWithWhereWithoutTransactionInput: ["where", "data"],
    ProductUpdateWithoutTransactionInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "rating", "category", "creator"],
    AccountCreateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    ProductCreateWithoutCreatorInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "rating", "category", "Transaction"],
    ProductCreateOrConnectWithoutCreatorInput: ["where", "create"],
    ProductCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
    TransactionCreateWithoutUserInput: ["id", "amount", "type", "createdAt", "product"],
    TransactionCreateOrConnectWithoutUserInput: ["where", "create"],
    TransactionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    ProductUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
    TransactionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    TransactionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    TransactionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "sessions", "Product", "Transaction"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "sessions", "Product", "Transaction"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "Product", "Transaction"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutSessionsInput: ["where", "data"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt", "role", "accounts", "Product", "Transaction"],
    TransactionCreateManyProductInput: ["id", "amount", "userId", "type", "createdAt"],
    TransactionUpdateWithoutProductInput: ["id", "amount", "type", "createdAt", "user"],
    ProductCreateManyCategoryInput: ["id", "title", "description", "price", "image", "userId", "balance", "createdAt", "updatedAt"],
    ProductUpdateWithoutCategoryInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "rating", "creator", "Transaction"],
    AccountCreateManyUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCreateManyUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    ProductCreateManyCreatorInput: ["id", "title", "description", "price", "image", "categoryId", "balance", "createdAt", "updatedAt"],
    TransactionCreateManyUserInput: ["id", "amount", "productId", "type", "createdAt"],
    AccountUpdateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionUpdateWithoutUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    ProductUpdateWithoutCreatorInput: ["id", "title", "description", "price", "image", "balance", "createdAt", "updatedAt", "rating", "category", "Transaction"],
    TransactionUpdateWithoutUserInput: ["id", "amount", "type", "createdAt", "product"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
