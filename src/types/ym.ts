
export type YMFunc = {
    (counterId: string, event: string, ...args: Array<unknown>): void;

    a: Array<IArguments>;
    l: number;
}

/**
 * Yandex.Metrika method-reference:
 * https://yandex.ru/support/metrica/objects/method-reference.html
 */
export type YMType = {
    init: (
        options: {
            accurateTrackBounce?: boolean;
            childIframe?: boolean;
            clickmap?: boolean;
            defer?: boolean;
            ecommerce?: boolean | string | Array<any>;
            params?: object | Array<any>;
            userParams?: object;
            trackHash?: boolean;
            trackLinks?: boolean;
            trustedDomains?: Array<string>;
            type?: number;
            webvisor?: boolean;
            triggerEvent?: boolean;
        }
    ) => void,

    addFileExtension: (extensions: string | Array<string>) => void,

    extLink: (
        url: string,
        options?: {
            callback?: Function;
            ctx?: object;
            params?: { order_price?: number; currency: string };
            title?: string;
        }
    ) => void,

    hit: (
        url: string,
        options?: {
            callback?: Function;
            ctx?: object;
            params?: { order_price?: number; currency: string };
            referer?: string;
            title?: string;
        }
    ) => void
};
