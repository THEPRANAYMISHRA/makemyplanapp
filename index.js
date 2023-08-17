const express = require('express');
const { connection } = require('./db');
const cors = require('cors');
const app = express();
const { PlanModel } = require('./model/plan');


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
    try {
        const plans = await PlanModel.find();
        res.json(plans);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/', async (req, res) => {
    const { name, email, destination, travelers, budget } = req.body
    try {
        let newPlan = new PlanModel({ name, email, destination, travelers, budget });
        await newPlan.save()
        res.send({ "msg": "Craeted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await PlanModel.findByIdAndDelete(id);
        res.send({ "msg": "deleted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start server
const PORT = 4500;
app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to the database");
    } catch (error) {
        console.error("Failed to connect to the database");
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});
