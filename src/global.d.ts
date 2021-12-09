import { YMFunc } from './types/ym';


declare global {
    interface Window {
        ym?: YMFunc;
    }
}
