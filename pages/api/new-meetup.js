//API Route are special pages or routes
//which do not return HTML code but accepts incoimg http request
//post, get, delete and so on
//Allow to do anything with JSON data
//Allow to build own API endpoints

import { MongoClient } from "mongodb";

//File name as must be included in the path name.
//Runs only on server & never exposed to the client

//  /api/new-meetup
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
    }
    const client = await MongoClient.connect();
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({message: 'Meetup inserted!'});
}
export default handler;