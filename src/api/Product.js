import request from "@/utils/request";

export function getProductList(categoryId){

    return request({
        url: `/categories/${categoryId}`,
        method: 'get'


    })

}