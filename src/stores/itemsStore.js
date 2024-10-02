import { create } from "zustand";
import { initialItems } from "../lib/constants";

// in Zustand objects will be automically shallowly merged into set state no need to spread operator unline setState in React
export const useItemStore = create((set)=> ({
    items: initialItems,
    addItem:(newItemText) => {
        const newItem = { name: newItemText.trim(), packed: false, id: new Date().getTime() };

        set(prevState => ({ items: [...prevState.items, newItem] }));
    },
    deleteItem: (id) => {
        set(state => ({ items: state.items.filter((item) => item.id !== id) }));
    },
    toggleItem: (id) => {
        set(state => {
            const newItems = state.items.map((item) => {
                if (item.id === id) {
                  return { ...item, packed: !item.packed };
                }
                return item;
              });
              return {items: newItems};

        });
        
      },
    removeAllItems: () => {
        set(() => ({ items: [] }));
    },
    resetToInitialItems: () => {
        set(() => ({ items: initialItems }));
    },
    markAllAsComplete: () => {
        set(state=> {
            const newItems = state.items.map((item) => ({ ...item, packed: true }));
            return { items: newItems };
        });
    },
    markAllAsIncomplete: () => {
        set(state=> {
            const newItems = state.items.map((item) => ({ ...item, packed: false }));
            return { items: newItems };
        });
    },

}));