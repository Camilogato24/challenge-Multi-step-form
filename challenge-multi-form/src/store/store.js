import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(persist((set) => ({
    step: 1,
    formData: {
        stepOne: {
            name: '',
            phone: '',
            email: '',
        },
        stepTwo: {
            arcade: {
                selected: false,
                name: 'Arcade',
                price: 9,
            },
            advanced: {
                selected: false,
                name: 'Advanced',
                price: 12,
            },
            pro: {
                selected: false,
                name: 'Pro',
                price: 15,
            },
            monthlyPlan: true,
        },
        stepThree: {
            onlineServices: false,
            largerStorage: false,
            customizableProfile: false,
        }
        
    },
    setStep: (step) => set({ step }),
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}), {
    name: 'storeMultiStepForm',
    getStorage: () => localStorage
}));

export default useStore;
