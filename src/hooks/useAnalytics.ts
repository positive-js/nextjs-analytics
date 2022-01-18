import { useEffect, useRef } from 'react';

import { YandexMetrika } from '../integrations';

export const useAnalytics = (
    options: { yandexCounterId: string } = {
        yandexCounterId: ''
    }
) => {
    const optionsRef = useRef<any>(options);

    useEffect(() => {
        const { current: options } = optionsRef;

        const yandexMetrika = new YandexMetrika();

        yandexMetrika.initialize(options.yandexCounterId);
        yandexMetrika.trackPageView();
    }, []);
};
