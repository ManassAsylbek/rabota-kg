import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IVacancyCategory, IVacancyParams, vacancyType} from "interfaces";



export const vacancyCategoryAPI = createApi({
    reducerPath: "vacancyCategoryAPI",
    baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_URL}),
    tagTypes:['vacancyCategoryAPI'],
    endpoints: (build) => ({
        fetchVacancyCategory: build.query<IVacancyCategory[], void>({
            query: () => ({
                url: '/vacancycategory',
            }),
            providesTags:(result,error,arg) =>['vacancyCategoryAPI']
        })
    })
})


export const {useFetchVacancyCategoryQuery} = vacancyCategoryAPI;
