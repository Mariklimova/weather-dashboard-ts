export interface Weather {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    weather: Array<{
        icon: string;
        main: string;
    }>;
    wind: {
        speed: number;
    };
}
