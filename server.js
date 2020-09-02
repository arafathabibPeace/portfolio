const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/resume-app-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const Person = mongoose.model(
    "person",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        firstname: String,
        middlename: String,
        lastname: String,
        image: String,
    })
);

app.post("/api/applicant", async (req, res) => {
    const newApplicant = new Person(req.body);
    const savedApplicant = await newApplicant.save();
    res.send(savedApplicant);
});

app.get("/api/applicant", async (req, res) => {
    const applicants = await Person.find({});
    res.send(applicants); 
})

app.put("/api/applicant", async (req, res) => {
    const updateApplicant = await Person.findOneAndUpdate(
        { _id: req.body._id },
        {
            $set: {
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname: req.body.lastname
            },
        });
    res.send(updateApplicant);
})
app.delete("/api/applicant/:id", async (req, res) => {
    const deletedApplicant = await Person.findByIdAndDelete(req.params.id);
    res.send(deletedApplicant);
})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));