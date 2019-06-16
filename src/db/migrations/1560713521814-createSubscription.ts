import {MigrationInterface, QueryRunner} from "typeorm";

export class createSubscription1560713521814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "revolve_subscription" ("id" SERIAL NOT NULL, CONSTRAINT "PK_c2f4037e73662a8536cf5f08b11" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "revolve_subscription"`);
    }

}
