import express from 'express'

const SampleController = {
  test: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // verbose = 冗長
    // const sqleteHandler = sqlite3.verbose()
    // const db = new sqlite3.Database(':memory:')
    
    // db.serialize(() => {
      // db.run("CREATE TABLE sample (info TEXT)")
    
      // const stmt = db.prepare("INSERT INTO sample VALUES (?)")
    
      // for (let i = 0; i < 10; i++) {
      //   stmt.run("Ipsum " + i)
      // }
      // stmt.finalize()
    
    //   db.each("SELECT rowid AS id, info FROM sample", (err, row) => {
    //     console.log(row)
    //   })
    // })
    
    // db.close()
    res.status(301).json({})
  }
}

export default SampleController