import expressAsyncHandler from "express-async-handler"
import { getResourcesByCategory } from "../services/Resource.js"

export const getResourcesByCategoryController = expressAsyncHandler(async (req, res, next) => {
    const { category } = req.params
    const resources = await getResourcesByCategory(category)
    res.status(200).json({
        status: true,
        resources
    })

})

