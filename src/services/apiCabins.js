import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log(error)
        throw new Error('Cabins could not be loaded')
    }
    console.log(data)
    return data
}

export async function createCabin(newCabin) {

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    // 1.craete cabin
    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, image: imagePath }])
        .select()

    if (error) {
        console.log(error)
        throw new Error('Cabins could not be created ')
    }
    console.log(data)

    // 2.upload image
    const { error: storageError } = await supabase.storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)

    //3. delete cabin if there was an error uploading the image
    if (storageError) {
        await supabase.from("cabins".delete().eq('id', data.id))
        console.error(storageError)
        throw new Error('Cabin image could not be uploaded and the cabin was not created')
    }

    return data

}

export async function deleteCabin(id) {

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)

    if (error) {
        console.log(error)
        throw new Error('cabin could not be deleted')
    }
    console.log(data)
    return data
}