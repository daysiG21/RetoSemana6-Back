import {Matricula} from "../config/relaciones";
//import matricula from "../models/matricula";

export const crearMatricua=async (req,res)=>{
  try{
    
    const nuevoMatricula =  await Matricula.create(req.body);
    return res.status(201).json({
      success:true,
      content:nuevoMatricula,
      message:"Matricula registrada correctamente",
    });
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:error,
      message:"Error al registrar la matricula",
    });
  }
  
};

export const listarMatricula = async (req, res) => {
  try {
    
    const matricula = await Matricula.findAll();
    return res.json({
      success: true,
      content: matricula,
      message: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al devolver las matriculas",
    });
  }
};

export const listarMatriculaId = async(req, res)=>{
  try{
    const {id} = req.params;    
    const matricula= await Matricula.findByPk(id);
    
    if(matricula){
      return res.json({
        success:true,
        content:matricula,
        message:null,
      });
    }
    else{
      return res.json({
        success:false,
        content:null,
        message:`El alumno ${id} no tiene matriculas`
      });
    } 
    
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:error,
      message:"Error al buscar la matricula"
    })
  }
};

export const actualizarMatricula = async(req,res)=>{
  try{
    const id = req.params.id;    
    const matricula = await Matricula.update(req.body,{
      where:{id:id}
    }).then(num=>{
      if(num==1){
        return res.json({
          success:true,          
          message:"Matricula actualizada"
        });
      }else{
        return res.json({
          success:false,          
          message:`No se puede actualizar la matricula con id ${id}`
        });
      }
    }

    )
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:error,
      message:"Error al actualizar la matricula"
    })

  }
};

export const eliminarMatricula = async(req,res)=>{
  try{
    const id = req.params.id;
    
    const matricula = await Matricula.destroy({
      where:{id:id}
    }).then(num=>{
      
      if(num==1){
        return res.json({
          success:true,          
          message:"Matricula eliminada"
        });
      }else{
        return res.json({
          success:false,          
          message:`No se puede eliminar la matricula con id ${id}`
        });
      }
    }

    )
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:error,
      message:"Error al eliminar la matricula"
    })

  }
};