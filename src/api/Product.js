import request from "@/utils/request";

export function getProductList(categoryId){

    return request({
        url: `/products/${categoryId}`,
        method: 'get'


    })

}