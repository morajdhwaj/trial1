/* eslint-disable no-console */
import PouchDb from "pouchdb";

const db = new PouchDb ("mypouchdb");

// db.info().then(()=>{
//     console.log("this is info",)
// });

export async function InserttoDB(data){
    try{
        const response= await db.post(data);
        return response
    }catch (error){
        console.error(error)
    }
    return null;
}

export function getToDB() {
    const val = db
      .allDocs({ include_docs: true, descending: true }, (err, doc) => doc.rows)
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
    return val;
  }
  
