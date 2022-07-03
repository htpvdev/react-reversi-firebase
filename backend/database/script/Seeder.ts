import { SeedingDataSource } from '../data-source'

SeedingDataSource.initialize().then(async () => {
  await SeedingDataSource.createQueryRunner().query(
    `
      DELETE FROM "migrations" WHERE "name" LIKE '%Seeder%';
    `
  )
  await SeedingDataSource.runMigrations()
  await SeedingDataSource.destroy()
}).catch(error => console.log(error))
