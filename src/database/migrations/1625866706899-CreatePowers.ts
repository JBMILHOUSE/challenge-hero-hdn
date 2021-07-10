import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePowers1625866706899 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(
        new Table({
            name: "powers",
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
                    name: "created_at",
                    type:"timestamp",
                    default: "now()"
                },
            ]
        })
     )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("powers");
    }

}
