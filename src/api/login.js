import request from "@/utils/request";

export function login(users){

    return request({
        url: `/users/login`,
        method: 'post',
        params: users


    })

}