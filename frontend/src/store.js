import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

const useStore = create((set) => ({
  // Data States
  blogs: [],
  clients: [],
  progress: [],
  projects: [],
  testimonials: [],
  whatDoing: [],
  chatBotPrompts: [],

  // Loading & Error States
  loading: false,
  error: null,

  // Fetch Actions
  fetchData: async (endpoint) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `${API_URL}/${endpoint}`,
        { params: { t: Date.now() } }
      );
      set((state) => ({
        [endpoint]: response.data, // Dynamically set the state key matching the endpoint
        loading: false,
      }));
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      set({ error: error.message, loading: false });
    }
  },

  // Specialized Fetch Actions (if needed for clearer component usage)
  fetchBlogs: () => useStore.getState().fetchData('blogs'),
  fetchClients: () => useStore.getState().fetchData('clients'),
  fetchProgress: () => useStore.getState().fetchData('progress'),
  fetchProjects: () => useStore.getState().fetchData('projects'),
  fetchTestimonials: () => useStore.getState().fetchData('testimonials'),
  fetchWhatDoing: () => useStore.getState().fetchData('whatdoing'),
  fetchChatBotPrompts: () => useStore.getState().fetchData('chatbotprompts'),

  // Initial Data Load (Optional: Call this in App.jsx to load everything at once)
  fetchAllData: async () => {
    set({ loading: true, error: null });
    try {
      const [
        blogsRes,
        clientsRes,
        progressRes,
        projectsRes,
        testimonialsRes,
        whatDoingRes,
        chatBotPromptsRes,
      ] = await Promise.all([
        axios.get(`${API_URL}/blogs`, { params: { t: Date.now() } }),
        axios.get(`${API_URL}/clients`, { params: { t: Date.now() } }),
        axios.get(`${API_URL}/progress`, { params: { t: Date.now() } }),
        axios.get(`${API_URL}/projects`, { params: { t: Date.now() } }),
        axios.get(`${API_URL}/testimonials`, { params: { t: Date.now() } }),
        axios.get(`${API_URL}/whatdoing`, { params: { t: Date.now() } }),
        axios.get(`${API_URL}/chatbotprompts`, { params: { t: Date.now() } }),
      ]);

      set({
        blogs: blogsRes.data,
        clients: clientsRes.data,
        progress: progressRes.data,
        projects: projectsRes.data,
        testimonials: testimonialsRes.data,
        whatDoing: whatDoingRes.data,
        chatBotPrompts: chatBotPromptsRes.data,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching all data:", error);
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;
