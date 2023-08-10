import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";
import { User } from "src/user/user.model";

interface IWord {
    term: string,
    definition: string,
    transcription: string
}

interface EducationalBlockCreationAttrs {
    name: string,
    description: string,
    words: IWord[]
}

@Table({ tableName: "educational_block" })
export class EducationalBlock extends Model<EducationalBlock, EducationalBlockCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.STRING, allowNull: false})
    description: string

    @Column({type: DataType.JSONB, allowNull: false})
    words: IWord[]

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;

    @BelongsTo(() => User)
    author: User
}