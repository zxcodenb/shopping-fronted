import request from "@/utils/request";

export function getList(){

    return request({
        url: `/categories`,
        method: 'get'


    })

}