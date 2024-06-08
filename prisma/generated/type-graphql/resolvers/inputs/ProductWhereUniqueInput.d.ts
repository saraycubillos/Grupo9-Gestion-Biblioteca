import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { RatingNullableRelationFilter } from "../inputs/RatingNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ProductWhereUniqueInput {
    id?: string | undefined;
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    price?: FloatFilter | undefined;
    image?: StringFilter | undefined;
    categoryId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    balance?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    rating?: RatingNullableRelationFilter | undefined;
    category?: CategoryRelationFilter | undefined;
    creator?: UserRelationFilter | undefined;
    Transaction?: TransactionListRelationFilter | undefined;
}
