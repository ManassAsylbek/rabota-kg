import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRegion, IVacancyParams, vacancyType} from "interfaces";
import {vacancyCategoryAPI} from "./vacancyCategoryServices";



export const regionAPI = createApi({
    reducerPath: "regionAPI",
    baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_URL}),
    tagTypes:['regionAPI'],
    endpoints: (build) => ({
        getRegion: build.query<IRegion[], void>({
            query: () => ({
                url: '/region'
            }),
            providesTags:(result,error,arg) =>['regionAPI']
        })

    })
})

export const {useGetRegionQuery} = regionAPI;
