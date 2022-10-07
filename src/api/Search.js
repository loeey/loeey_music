import request from '@/utils/request'

export const hotSearch = params => request(
    {
        url: '/search/hot',
        params
    }
)
export const searchResult = params => request(
    {
        url: '/cloudsearch',
        params
    }
)