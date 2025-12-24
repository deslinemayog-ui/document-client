import { create } from 'zustand';

interface UILoaderState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const useUILoader = create<UILoaderState>((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));

export default useUILoader;