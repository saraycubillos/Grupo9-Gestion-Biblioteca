import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SessionWhereInput {
    AND?: SessionWhereInput[] | undefined;
    OR?: SessionWhereInput[] | undefined;
    NOT?: SessionWhereInput[] | undefined;
    sessionToken?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
}
