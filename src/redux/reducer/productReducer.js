import { SET_PRODUCT_LIST } from "../constant"

export const productData = (data = [], action) => {

    console.warn("first action called step 22",action.type);

    switch (action.type) {
        case SET_PRODUCT_LIST:
                console.warn("second SET PRODUCT_LIST condition ", action)
                return [...action.data]
        default:
            return data
    }
}