import mongodb from 'mongodb';
import envs from '../configs/env.mts';

if (!envs.URI) throw new Error("MongoDB URI is not defined"); // Env check

const client: mongodb.MongoClient = new mongodb.MongoClient(envs.URI);

/**
 * Connects to the MongoDB database
 * @returns void
 * @throws Error if an error occurs
 */
async function connectToDatabase(log?: boolean): Promise<void> {
  try {
    await client.connect();
    if (log) {
      console.log("Connected to MongoDB");
    }
  } catch (error: any) {
    console.error(`Error connecting to MongoDB:${error}`);
    throw new Error(error as string);
  }
}

/**
 * Write data to the database collection.
 *
 * @param data Data to be written to the database
 * @param collectionName Name of the collection to write to
 * @param log Whether to log the database connection status
 * @returns The ID of the inserted document
 * @throws CustomError if an error occurs
 */
async function writeToDatabase(
  data: mongodb.OptionalId<Document> | mongodb.OptionalId<Document>[], // Change to a more specific type if possible
  collectionName: string,
  log: boolean
): Promise<[any, boolean]> {
  try {
    await connectToDatabase(log);
    const database: mongodb.Db = client.db(envs.CLIENT_DB);
    const collection: mongodb.Collection<Document> = database.collection(collectionName);

    const result: mongodb.InsertOneResult = await collection.insertOne(data as mongodb.OptionalId<Document>);

    if (result.insertedId) {
      console.log("Inserted document with _id:", result.insertedId);
      return [result.insertedId, true];
    } else {
      console.log("No document was inserted");
      return [undefined, false];
    }
  } catch (error: any) {
    console.error(`Error writing to database: ${error}`);
    throw new Error(error);
  }
}
/**
 * @param filter The filter to use when modifying
 * @param update The update object containing the fields to modify
 * @param collectionName The name of the collection to modify
 * @param log (optional) Set to true to log modification messages
 * @returns The number of documents modified
 * @throws Error if an error occurs
 */
async function modifyInDatabase(
  filter: mongodb.Filter<unknown>,
  update: object, // Change to a more specific type if possible
  collectionName: string,
  log?: boolean
): Promise<number> {
  try {
    await connectToDatabase(log);

    const database: mongodb.Db = client.db(envs.CLIENT_DB);
    const collection: mongodb.Collection<Document> = database.collection(collectionName);

    const updateData: object = { $set: update };

    const result: mongodb.UpdateResult = await collection.updateOne(filter, updateData);

    if (log && result.modifiedCount > 0) {
      console.log("\x1b[32m", "Modified", result.modifiedCount, "document(s)");
    } else if (log && result.modifiedCount === 0) {
      console.log("\x1b[32m", "No documents modified");
    }

    return result.modifiedCount;
  } catch (error: any) {
    console.error("\x1b[31m", `Error modifying document:, ${error}`);
    throw new Error(error);
  }
}

/**
 * @param filter The filter to use when deleting
 * @param collectionName The name of the collection to delete from
 * @param type The type of delete to perform (1 = one, 2 = many)
 * @param log (optional) Set to true to log deletion messages
 * @returns The number of documents deleted, or undefined if no documents were deleted
 * @throws Error if an error occurs
 */
async function deleteFromDatabase(
  filter: mongodb.Filter<unknown>,
  collectionName: string,
  type: 1 | 2 | "one" | "many" = 1,
  log?: boolean
): Promise<number> {
  try {
    await connectToDatabase(log);

    const database = client.db(envs.CLIENT_DB);
    const collection = database.collection(collectionName);

    if (type === 1 || type === "one") {
      const result: mongodb.DeleteResult = await collection.deleteOne(filter);

      if (log && result.deletedCount === 0) {
        console.log("\x1b[32m", "No documents deleted");
      } else if (log && result.deletedCount > 0) {
        console.log("\x1b[32m", "Deleted", result.deletedCount, "document(s)");
      }

      return result.deletedCount;
    } else if (type === 2 || type === "many") {
      const result: mongodb.DeleteResult = await collection.deleteMany(filter);

      if (log && result.deletedCount === 0) {
        console.log("\x1b[32m", "No documents deleted");
      } else if (log && result.deletedCount > 0) {
        console.log("\x1b[32m", "Deleted", result.deletedCount, "document(s)");
      }

      return result.deletedCount;
    }

    // Add a default return value for any other cases
    return 0;
  } catch (error: any) {
    console.error("\x1b[31m", `Error deleting document(s):, ${error}`);
    throw new Error(error);
  }
}


/**
 * 
 * @param collectionName The name of the collection to get items from
 * @param dataId The ID of the data to get from the database
 * @returns Returns the items from the database as a JSON string
 * @throws Error if an error occurs
 */
async function getItemsFromDatabase(
  collectionName: string,
  log?: boolean,
  dataId?: mongodb.Filter<unknown>
): Promise<string> {
  try {
    await connectToDatabase(log);

    const database: mongodb.Db = client.db(envs.CLIENT_DB);
    const collection: mongodb.Collection<Document> = database.collection(collectionName);
    const projection: object = { _id: 0 };

    let items: mongodb.WithId<Document> | mongodb.WithId<Document>[] | null = null;

    if (dataId) {
      items = await collection.findOne(dataId, { projection: projection });
    } else {
      items = await collection.find({}).toArray();
    }

    return JSON.stringify(items);
  } catch (error: any) {
    console.error("\x1b[31m", `Error getting items from database:, ${error}`);
    throw new Error(error);
  }
}

export type mongoFuncsType = {
  writeToDatabase: (
    data: mongodb.OptionalId<Document> | mongodb.OptionalId<Document>[],
    collectionName: string,
    log: boolean
  ) => Promise<[any, boolean]>;
  modifyInDatabase: (
    filter: mongodb.Filter<unknown>,
    update: object,
    collectionName: string,
    log?: boolean
  ) => Promise<number>;
  getItemsFromDatabase: (
    collectionName: string,
    log?: boolean,
    dataId?: mongodb.Filter<unknown>
  ) => Promise<string>;
  deleteFromDatabase: (
    filter: mongodb.Filter<unknown>,
    collectionName: string,
    type: 1 | 2 | "one" | "many",
    log?: boolean
  ) => Promise<number>;
}

const mongoFuncs: mongoFuncsType = {
  writeToDatabase,
  modifyInDatabase,
  getItemsFromDatabase,
  deleteFromDatabase
};

export {
  writeToDatabase,
  modifyInDatabase,
  getItemsFromDatabase,
  deleteFromDatabase
}

export default mongoFuncs;