import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1530615734652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "some_other_entity" ("id" SERIAL NOT NULL, CONSTRAINT "PK_ce94ea878f58c145c9110529edc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "third_entity" ("id" SERIAL NOT NULL, CONSTRAINT "PK_88ea62fa329f69ac3c3e75e894f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "some_entity" ("id" SERIAL NOT NULL, "otherEntityId" integer, "thirdEntityId" integer, CONSTRAINT "PK_aa9e03817553873454c37ac7cf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "some_entity" ADD CONSTRAINT "FK_1be77a1ca3d6d7e93c5de93d2e0" FOREIGN KEY ("otherEntityId") REFERENCES "some_other_entity"("id")`);
        await queryRunner.query(`ALTER TABLE "some_entity" ADD CONSTRAINT "FK_88949f4a5f21e6895b4008367ec" FOREIGN KEY ("thirdEntityId") REFERENCES "third_entity"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "some_entity" DROP CONSTRAINT "FK_88949f4a5f21e6895b4008367ec"`);
        await queryRunner.query(`ALTER TABLE "some_entity" DROP CONSTRAINT "FK_1be77a1ca3d6d7e93c5de93d2e0"`);
        await queryRunner.query(`DROP TABLE "some_entity"`);
        await queryRunner.query(`DROP TABLE "third_entity"`);
        await queryRunner.query(`DROP TABLE "some_other_entity"`);
    }

}
