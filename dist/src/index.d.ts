import { Blob } from './blob';
import { Das } from './das';
import { Fraud } from './fraud';
import { Header } from './header';
import { Node } from './node';
import { P2P } from './p2p';
import { Share } from './share';
import { State } from './state';
export default class Client {
    url: string;
    apiKey: string;
    Blob: Blob;
    Das: Das;
    Fraud: Fraud;
    Header: Header;
    Node: Node;
    P2P: P2P;
    Share: Share;
    State: State;
    constructor(url: string, apiKey: string);
    request<T>(payload: object): Promise<T>;
}
//# sourceMappingURL=index.d.ts.map