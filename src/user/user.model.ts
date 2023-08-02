import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/role/role.model";
import { UserRoles } from "src/user-roles/user-roles.model";

interface UserCreationAttrs {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

@Table({ tableName: "user" })
export class User extends Model<User, UserCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number

    @Column({type: DataType.STRING, allowNull: false})
    firstName: string

    @Column({type: DataType.STRING, allowNull: false})
    lastName: string

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}