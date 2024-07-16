const asyncHandler = () => {
  (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;

// const asyncHandler = () => {() => {}}
// const asyncHandler = () => () => {}
// const asyncHandler = () => async() => {}

// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.status || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
