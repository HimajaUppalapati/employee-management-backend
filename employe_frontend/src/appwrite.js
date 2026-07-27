import { Client, TablesDB } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("6a66eef6001c3acb520e");

export const tablesDB = new TablesDB(client);

export const DATABASE_ID = "6a66f0ac002888e95e7c";
export const TABLE_ID = "employees";