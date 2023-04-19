import { PRODUCT_SAGA_CALL,ARTICLE_SAGA_CALL } from "../constant"

export const productList =  () => {
    console.warn("first action called step 1");
    return {
        type: PRODUCT_SAGA_CALL
    }
}

export const articleList =  () => {
    console.warn("first action called step 2");
    return {
        type: ARTICLE_SAGA_CALL
    }
}
