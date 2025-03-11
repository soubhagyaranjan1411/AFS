const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email: emailm
        }
    });

    if (!user) return res.status(404).json({ message: "User does not exist" });

    if (user.password !== password) return res.status(401).json({ message: "Incorrect password" });

    res.status(200).json({ message: "Login successful" });
});

module.exports = router;