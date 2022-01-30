export const isDOM = (): boolean => {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
};
