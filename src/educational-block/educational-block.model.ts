import { Column, DataType, Model, Table } from "sequelize-typescript";

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
}