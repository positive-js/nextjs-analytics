import { useEffect, useRef } from 'react';

import { YandexMetrika } from '../integrations';
import { Router } from 'next/router';

export const useAnalytics = (
    options: { yandexCounterId: string } = {
        yandexCounterId: ''
    }
) => {
    const optionsRef = useRef<any>(options);

    const routeChangeListenerList: Array<() => void> = [];

    function routeChangeComplete() {
        routeChangeListenerList.forEach((listener) => listener());
    }

    useEffect(() => {
        const { current: options } = optionsRef;

        const yandexMetrika = new YandexMetrika();

        yandexMetrika.initialize(options.yandexCounterId);
        yandexMetrika.trackPageView();

        routeChangeListenerList.push(() => yandexMetrika.trackPageView());

        Router.events.on('routeChangeComplete', routeChangeComplete);
        Router.events.on('routeChangeError', routeChangeComplete);

        return () => {
            Router.events.off('routeChangeComplete', routeChangeComplete);
            Router.events.off('routeChangeError', routeChangeComplete);
        };
    }, []);
};
