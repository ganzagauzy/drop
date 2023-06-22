import axios from "axios";
// eslint-disable-next-line require-await
export default defineNuxtPlugin(async() => {
    const api = axios.create({
        baseURL: useRuntimeConfig().public.apiBase, // Replace with your desired base URL
      });
   
  return {
    provide: {
        axios:api,
    }
  }

});