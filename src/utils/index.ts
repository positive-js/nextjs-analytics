export const isDOM = ():boolean => {
    return (
        typeof window !== 'undefined' &&
        typeof window.document !== 'undefined' &&
        typeof window.document.createElement !== 'undefined'
    );
}
