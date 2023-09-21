import request from "@/utils/request";

export function getRecommendList(){

    return request({
        url: `/recommend`,
        method: 'get'


    })

}