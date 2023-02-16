const mongoose = require('mongoose');

// connection creation and create a new db
mongoose.connect("mongodb://localhost:27017/jarvizChannel", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection succesfully")).catch((err) => console.log(err));

//Schema
//A Mongoose schema defines the structure of the document,
// default values,validators,etc...

const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ctype: String,
    videos: Number,
    author: String,
    activity: Boolean,
    date: {
        type: Date,
        Default: Date.now,
    }
})

//A mongoose model is a wrapper on the Mongoose Schema.
// A  Mongoose Schema defines the strucure of the document,
// default values,validators,etc... whereas a Mongoose model
// provide an  interface to the database  for creating querying,
// updating, delecting records etc..

// colection creation
// "Playlist" should be captial beacuse it behave like a Class.

const PlayList = new mongoose.model("Playlist", playListSchema);

const createDocument = async () => {
    try {
        const reactPlaylist = new PlayList({
            name: "Jarviz",
            ctype: "Front End",
            videos: 80,
            author: "Jarviz",
            activity: true,
        })

        const result = await reactPlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);

    }
}
createDocument();
