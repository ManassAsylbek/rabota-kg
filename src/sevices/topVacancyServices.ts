import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IVacancyParams, vacancyType} from "interfaces";



export const topVacancyAPI = createApi({
    reducerPath: "topVacancyAPI",
    baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_URL}),
    tagTypes:['topVacancy'],
    endpoints: (build) => ({
        fetchAllTopVacancy: build.query<vacancyType[], IVacancyParams>({
            query: (params?) => ({
                url: '/topvacancy',
                params:params
            }),
            providesTags:(result,error,arg) =>['topVacancy']
        }),
        fetchTopVacancy: build.query<vacancyType[], number>({
            query: (id) => ({
                url: `/topvacancy/${id}`,
            }),
            providesTags:(result,error,arg) =>['topVacancy']
        }),
        createTopVacancy: build.mutation<vacancyType, vacancyType>({
            query: (todoList: vacancyType) => ({
                url: '/topvacancy',
                method:"POST",
                body: todoList
            }),
            invalidatesTags:['topVacancy']
        }),
        updateTopVacancy: build.mutation<vacancyType, vacancyType>({
            query: (vacancy: vacancyType) => ({
                url: `/topvacancy/${vacancy.id}`,
                method:"PUT",
                body: vacancy
            }),
            invalidatesTags:['topVacancy']
        }),
        deleteTopVacancy: build.mutation<vacancyType, vacancyType>({
            query: (vacancy: vacancyType) => ({
                url: `/topvacancy/${vacancy.id}`,
                method:"DELETE",
                body: vacancy
            }),
            invalidatesTags:['topVacancy']
        })

    })
})
