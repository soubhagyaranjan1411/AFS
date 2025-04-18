const express=require("express");
const router=express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
router.get("/:email",  async(req,res)=>{
    const {email}=req.params;
    const user = await prisma.user.findUnique({
        where: {
          email:email,
        },
      })
    res.json({user})

})
router.post("/",async(req,res)=>{
    const{email,name}=req.body;
    let newUser= await prisma.user.create({
        data:{
            email:email,
            name:name,
        }
    })
    res.json({newUser})
})
router.delete("/:email",async(req,res)=>{
    const {email}=req.params;
    const deleteUser = await prisma.user.delete({
        where: {
          email: email,
        },
      })
      res.send("User Deleted")
})
// app.put("/user/:email/:name",async(req,res)=>{
//     const {email}=req.params;
//     const {name}=req.body;
//     const updateUser = await prisma.user.update({
//         where: {
//           email: email,
//         },
//         data: {
//           name: name,
//         },
//       })
//       res.send("User Updated")
// })
module.exports=router;