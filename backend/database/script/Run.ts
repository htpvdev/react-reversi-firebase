import { MigrationDataSource } from '../data-source'

MigrationDataSource.initialize().then(async () => {
  await MigrationDataSource.runMigrations()
  await MigrationDataSource.destroy()
}).catch(error => console.log(error))
