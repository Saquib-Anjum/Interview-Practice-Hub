import express from 'express';
import todoDB from '../models/todoDB.js'
//create TODO
const createTODO = async (req, res) => {
    try {
      const { title, description } = req.body;
      const todoData = {
        title,          // Using shorthand property
        description,    // Using shorthand property
        completed: false,  // This should be defined here, not referenced
        createdAt: new Date()
      };
      const todo = new todoDB(todoData);
      await todo.save();
      res.json({
        success: true,
        todo,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
};
  


//update TODO
const updateTODO =async (req,res)=>{
    try{
      const {id,completed} =req.body
      const updateTODO = await todoDB.findByIdAndUpdate(id,{completed});
      if (!updateTODO) {
        return res.status(404).json({
          success: false,
          message: 'TODO not found',
        });
      }
      res.json({
        success:true,
        updateTODO
      })
    }catch(err){
        console.log(err);
        res.json({
            success:flase,
            message:err
        })
    }
}


//read TODO
const readTODO =async (req,res)=>{
    try{
        const allTODO = await todoDB.find();

      res.json({
        success:true,
        allTODO
      })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:err
        })
    }
}


//delete TODO
const deleteTODO =async (req,res)=>{
    try{
const {id} = req.body;
const deleteTODO = await todoDB.findByIdAndDelete(id)
if (!deleteTODO) {
    return res.status(404).json({
      success: false,
      message: 'TODO not found',
    });
  }
res.json({
    success: true,
      message: 'TODO deleted successfully',
})
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:err
        })
    }
}

export {createTODO,updateTODO,readTODO,deleteTODO};