import { YMType } from '../types';
import { isDOM } from '../utils';

export class YandexMetrika {
    private isInitialized = false;
    private _tracker: YMType;

    initialize(counterId: string) {
        if (this.isInitialized || !isDOM()) {
            return;
        }

        this._tracker = this.createYMTracker(counterId);

        this.appendYMScript();

        this.isInitialized = true;
    }

    trackPageView() {
        this.tracker.hit(window.location.href, {
            referer: document.referrer,
            title: document.title
        });
    }

    get tracker(): YMType {
        return this._tracker;
    }

    private appendYMScript(): void {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://mc.yandex.ru/metrika/tag.js';

        document.body.appendChild(script);
    }

    private getYMScript() {
        if (isDOM() && typeof window.ym === 'function') {
            return window.ym;
        }

        const dataLayer: Array<IArguments> = [];

        const ym = () => {
            dataLayer.push(arguments);
        };

        ym.a = dataLayer;
        ym.l = new Date().valueOf();

        if (isDOM()) {
            window.ym = ym;
        }

        return ym;
    }

    private createYMTracker(counterId: string): YMType {
        const ym = this.getYMScript();

        return {
            init(...args) {
                ym(counterId, 'init', ...args);
            },
            addFileExtension(...args) {
                ym(counterId, 'addFileExtension', ...args);
            },
            extLink(...args) {
                ym(counterId, 'extLink', ...args);
            },
            hit(...args) {
                ym(counterId, 'hit', ...args);
            },
            file(...args) {
                ym(counterId, 'file', ...args);
            },
            getClientID(...args) {
                ym(counterId, 'getClientID', ...args);
            },
            notBounce(...args) {
                ym(counterId, 'notBounce', ...args);
            },
            params(...args) {
                ym(counterId, 'params', ...args);
            },
            reachGoal(...args) {
                ym(counterId, 'reachGoal', ...args);
            },
            replacePhones(...args) {
                ym(counterId, 'replacePhones', ...args);
            },
            setUserID(...args) {
                ym(counterId, 'setUserID', ...args);
            },
            userParams(...args) {
                ym(counterId, 'userParams', ...args);
            }
        };
    }
}
