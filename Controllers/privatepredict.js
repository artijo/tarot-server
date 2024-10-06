const private_predict = require('../Models/Private_predict')
const User = require('../Models/User');

function InsertAnswer(req, res) {
    const data = req.body;

    User.findOne({ email: data.email })
        .then((userdata) => {
            if (!userdata) {
                return res.status(404).json({ message: 'User not found' });
            }

            console.log('User ID:', userdata._id);

            return private_predict.findOne({ User: userdata._id }).sort({ createdAt: -1 });
        })
        .then((duser) => {
            if (!duser) {
                return res.status(404).json({ message: 'Prediction data not found' });
            }

            console.log('Prediction ID:', duser._id);
            console.log('Answer:', data.answer);

            return private_predict.findByIdAndUpdate(
                duser._id,
                { 
                    $set: { "massage.0.asn": data.answer } 
                },
                { new: true }
            );
        })
        .then((updatedDoc) => {
            if (!updatedDoc) {
                return res.status(500).json({ message: 'Failed to update the answer' });
            }

            console.log('Updated document:', updatedDoc);
            res.status(200).json({ message: 'Answer updated successfully', updatedDoc });
        })
        .catch((err) => {
            console.error('Error:', err);
            res.status(500).json({ message: 'An error occurred', error: err.message });
        });
}


// function getAll(req,res){
//     const email = req.body.email
//     console.log(email)
//     User.findOne({email:email}
//         .then((userdata)=>{
//             if (!userdata){
//                 console.log("User not found"+email)
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             console.log("Found",userdata.email)
//             return private_predict.findOne({User:userdata._id}).sort({ createdAt: -1 })
//         })
//         .then((predict)=>{
//             if (!predict){
//                 console.log("Not Found Predict")
//                 return res.status(404).json({ message: 'Predict not found' });
//             }
//             return private_predict.findOne({User:userdata._id})
//         })
//         .then((finalpredict)=>{
//             if (!finalpredict){
//                 console.log("Not Found Predict")
//                 return res.status(404).json({ message: 'Predict not found' });
//             }
//             res.send(finalpredict)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     )
// }
async function getAll(req, res) {
    try {
        const email = req.body.email;
        const userdata = await User.findOne({ email: email });  // หาผู้ใช้
        const predict = await private_predict.findOne({ User:userdata._id}).sort({createdAt:-1});
        res.send(predict);
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
}

function Insertquestion(req, res) {

    const data = req.body
    User.findOne({email:data.email}).then((result)=>{
       
        
        const newQuestion = new private_predict({
            User:result._id,
            massage:[{
                question: data.question,
                asn:""
            }]     
        });
        newQuestion.save().then((result) => {
            res.send(result);
            
        }).catch((error) => {
            res.send(error);
        });
        
    }).catch((err)=>{
        res.send(err)
    })
   
}
module.exports = {InsertAnswer, getAll,Insertquestion};
