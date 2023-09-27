import request from "@/utils/request";

export function getProductList(categoryId){

    return request({
        url: `/categories/${categoryId}`,
        method: 'get'


    })

}


export function getDetail(productId) {

    return request({
        url: `/products/${productId}`,
        method: 'get'


    })
}