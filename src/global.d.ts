import { YMFunc } from './types';


declare global {
    interface Window {
        ym?: YMFunc;
    }
}
