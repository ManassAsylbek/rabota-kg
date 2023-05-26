import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IVacancyParams, vacancyType} from "interfaces";
import {vacancyCategoryAPI} from "./vacancyCategoryServices";



export const vacancyAPI = createApi({
    reducerPath: "vacancyAPI",
    baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_URL}),
    tagTypes:['Vacancy'],
    endpoints: (build) => ({
        fetchAllVacancy: build.query<vacancyType[], IVacancyParams>({
            query: (params) => ({
                url: '/vacancy',
                params:params
            }),
            providesTags:(result,error,arg) =>['Vacancy']
        }),
        fetchVacancy: build.query<vacancyType[], number>({
            query: (id) => ({
                url: `/vacancy/${id}`,
            }),
            providesTags:(result,error,arg) =>['Vacancy']
        }),
        createVacancy: build.mutation<vacancyType, vacancyType>({
            query: (todoList: vacancyType) => ({
                url: '/vacancy',
                method:"POST",
                body: todoList
            }),
            invalidatesTags:['Vacancy']
        }),
        updateVacancy: build.mutation<vacancyType, vacancyType>({
            query: (vacancy: vacancyType) => ({
                url: `/vacancy/${vacancy.id}`,
                method:"PUT",
                body: vacancy
            }),
            invalidatesTags:['Vacancy']
        }),
        deleteVacancy: build.mutation<vacancyType, vacancyType>({
            query: (vacancy: vacancyType) => ({
                url: `/vacancies/${vacancy.id}`,
                method:"DELETE",
                body: vacancy
            }),
            invalidatesTags:['Vacancy']
        })

    })
})


export const {useFetchAllVacancyQuery,useFetchVacancyQuery,} = vacancyAPI;
