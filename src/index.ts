import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Blob } from './blob';
import { Das } from './das';
import { Fraud } from './fraud';
import { Header } from './header';
import { Node } from './node';
import { P2P } from './p2p';
import { Share } from './share';
import { State } from './state';

interface ClientResponse<T> {
    result: T;
    error?: {
        message: string;
    };
}

export default class Client {
    public url: string;
    public apiKey: string;

    public Blob: Blob;
    public Das: Das;
    public Fraud: Fraud;
    public Header: Header;
    public Node: Node;
    public P2P: P2P;
    public Share: Share;
    public State: State;

    constructor(url: string, apiKey: string) {
        this.url = url;
        this.apiKey = apiKey;

        this.Blob = new Blob(this);
        this.Das = new Das(this);
        this.Fraud = new Fraud(this);
        this.Header = new Header(this);
        this.Node = new Node(this);
        this.P2P = new P2P(this);
        this.Share = new Share(this);
        this.State = new State(this);
    }

    async request<T>(payload: object): Promise<T> {
        const config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`,
            },
        };

        try {
            const response: AxiosResponse<ClientResponse<T>> = await axios.post(
                this.url,
                payload,
                config,
            );

            if (response.data.error) {
                throw new Error(`${response.data.error.message}`);
            }

            return response.data.result;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(
                    `HTTP error! Status: ${error.response.status} - ${error.response.statusText}`,
                );
            } else if (axios.isAxiosError(error) && error.request) {
                throw new Error('No response received from the server.');
            } else {
                throw new Error(
                    `Request failed: ${
                        error instanceof Error ? error.message : 'Unknown error'
                    }`,
                );
            }
        }
    }
}
