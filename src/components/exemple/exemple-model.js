import mongoose from "mongoose";

const { Schema } = mongoose

const exempleSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    colors: {
        type: [String],
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
})

const Exemple = mongoose.model('Exemple', exempleSchema)

// Exemple.create({
//     name: "Test 2",
//     colors: ['black', 'red'],
//     description: "blabla",
//     price: 500
// })

const findAll = async () => {

    const exemples = await Exemple.find()
    console.log('FIND ALL *********************', exemples);
}

const findById = async () => {

    const exemple = await Exemple.findById('63721a1a30240cc4e4150088')
    console.log('FIND BY ID *********************', exemple);
}

const updateById = async () => {
    // Méthode 1
    const exemple = await Exemple.findByIdAndUpdate(
        '63721a1a30240cc4e4150088',
        { name: "first element" },
        { runValidators: true, new: true }
    )

    // Méthode 2
    // const exemple = await Exemple.findById('63721a1a30240cc4e4150088')
    // exemple.name = "first element"
    // exemple.save()

    // Méthode 3
    // const exemple = await Exemple.findById('63721a1a30240cc4e4150088')
    // exemple.set({
    //     name: "first element"
    // }),
    // exemple.save()
    findAll()
    console.log('UPDATE  BY ID *********************', exemple);
}

const deleteById = async () => {
    const exemple = await Exemple.findByIdAndDelete('63721a1a30240cc4e4150088')
}

// findById();
// updateById();
// deleteById()

export default Exemple