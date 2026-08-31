export declare class AppController {
    getRoot(): {
        service: string;
        status: string;
        version: string;
        apiPrefix: string;
        timestamp: string;
    };
    getHealth(): {
        success: boolean;
        status: string;
        service: string;
        timestamp: string;
    };
}
