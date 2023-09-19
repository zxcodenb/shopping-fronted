import request from "@/utils/request";

export function getImageList(){

    return request({
        url: `/indexImg`,
        method: 'get'


    })

}