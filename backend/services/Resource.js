import Resource from '../models/Resources.js'

export const getResources = async () => {
    try {
        const resources = await Resource.findAll();
        return resources;
    } catch (error) {
        throw new Error(error)
    }
}
export const getResourcesByCategory = async (category) => {
    try {
        const resources = await Resource.find({ category })
        return resources
    } catch (error) {
        throw new Error(error)
    }
}