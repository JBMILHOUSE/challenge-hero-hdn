import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHeroesAndPowers1626045147242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
             name: "heroes_powers",
             columns:[
                 {
                     name: "id",
                     type: "uuid",
                     isPrimary: true
                 },
                 {
                     name: "hero_id",
                     type: "uuid"
                 },
                 {
                     name: "power_id",
                     type: "uuid"
                 },
                 {
                     name: "created_at",
                     type: "timestamp",
                     default: "now()"
                 },
             ],
             foreignKeys:[
                 {
                    name: "FKHeroId",
                    referencedTableName: "heroes",
                    referencedColumnNames: ["id"],
                    columnNames: ["hero_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                 },
                 {
                    name: "FKPowerId",
                    referencedTableName: "powers",
                    referencedColumnNames: ["id"],
                    columnNames: ["power_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                 },
             ]
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("heroes_powers")
    }

}
