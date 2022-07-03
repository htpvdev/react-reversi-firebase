import { MigrationDataSource } from '../data-source'

MigrationDataSource.initialize().then(async () => {
  await MigrationDataSource.createQueryRunner().clearDatabase()
  await MigrationDataSource.runMigrations()
  await MigrationDataSource.destroy()
}).catch(error => console.log(error))
