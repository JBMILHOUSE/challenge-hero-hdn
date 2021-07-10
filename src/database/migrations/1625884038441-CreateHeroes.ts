import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHeroes1625884038441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(
        new Table({
            name: "heroes",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "powers_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },     
             ],
             foreignKeys: [
                {
                    name: "FKPower",
                    referencedTableName: "powers",
                    referencedColumnNames: ["id"],
                    columnNames: ["powers_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }) 
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("heroes")
    }

}
