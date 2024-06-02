import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEURL = 'http://127.0.0.1:8000/api';

export const suivie_formation_api = createApi({
  reducerPath: "suivie_formation_api",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getRegions: builder.query({
      query: () => "/regions",
    }),
    getVilles: builder.query({
      query: () => "/villes",
    }),
    getSpecialites: builder.query({
      query: () => "/specialites",
    }),
    getInstituts: builder.query({
      query: () => "/instituts",
    }),
    getFormateurs: builder.query({
      query: () => "/formateurs",
    }),
    getAnimateurs: builder.query({
      query: () => "/animateurs",
    }),
    getBrouillons: builder.query({
      query: () => "/brouillons",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    getFormateurById: builder.query({
      query: (formateurId) => `/formateurs/${formateurId}`,
    }),
    getBrouillonsById: builder.query({
      query: (brouillonsId) => `/brouillons/${brouillonsId}`,
    }),
    getFormations: builder.query({
      query: () => "/formations",
    }),
    getFormationById: builder.query({
      query: (id) => `/formations/${id}`,
    }),
    getDocumentationById: builder.query({
      query: (id_doc) => `/doc/formation/${id_doc}`,
    }),
    getNotificationById: builder.query({
      query: (id_not) => `/not/formation/${id_not}`,
    }),
    getInstitutsById: builder.query({
      query: (id) => `/instituts/${id}`,
    }),
    getParticipationById: builder.query({
      query: (id) => `/participations/${id}`,
    }),
    postFormation: builder.mutation({
      query: (body) => ({
        url: '/formations',
        method: 'POST',
        body,
      }),
    }),    
    postAnimateur: builder.mutation({
      query: (body) => ({
        url: '/animateurs',
        method: 'POST',
        body,
      }),
    }),    
    postDocumentation: builder.mutation({
      query: (body) => ({
        url: '/documentations',
        method: 'POST',
        body,
      }),
    }),    
    postNotification: builder.mutation({
      query: (body) => ({
        url: '/notifications',
        method: 'POST',
        body,
      }),
    }),    
    postSpecialite: builder.mutation({
      query: (body) => ({
        url: '/specialites',
        method: 'POST',
        body,
      }),
      // transformResponse: (response, meta, arg) => response.data,
    }),
    postParticipation: builder.mutation({
      query: (body) => ({
        url: '/formateurs_formations',
        method: 'POST',
        body,
      }),
    }),
    postInstituts: builder.mutation({
      query: (body) => ({
        url: '/instituts',
        method: 'POST',
        body,
      }),
    }),
    postFormateur: builder.mutation({
      query: (body) => ({
        url: '/formateurs',
        method: 'POST',
        body,
      }),
    }),
    postUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
    }),
    // updateFormation: builder.mutation({
    //   query: ({id, body}) => ({
    //       url: `/update-formation/${id}`,
    //       method: 'PATCH',
    //       body: body,
    //   }),
    // }),
  }),
});

export const {
  useGetVillesQuery,
  useGetRegionsQuery,
  useGetSpecialitesQuery,
  useGetInstitutsQuery,
  useGetFormateursQuery,
  useGetAnimateursQuery,
  useGetFormationsQuery,
  useGetBrouillonsQuery,
  useGetUsersQuery,
  useGetBrouillonsByIdQuery,
  useGetUserByIdQuery,
  useGetFormationByIdQuery,
  useGetDocumentationByIdQuery,
  useGetFormateurByIdQuery,
  useGetNotificationByIdQuery,
  useGetParticipationByIdQuery,
  useGetInstitutsByIdQuery,
//   useGetCardsQuery,
  usePostFormationMutation,
  usePostAnimateurMutation,
  usePostDocumentationMutation,
  usePostNotificationMutation,
  usePostSpecialiteMutation,
  usePostParticipationMutation,
  usePostInstitutsMutation,
  usePostFormateurMutation,
  usePostUserMutation,
  // useUpdateFormationMutation
} = suivie_formation_api;