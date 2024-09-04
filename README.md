# Celestia Node Typescript Client

This is a fork of [Celestia Node TypeScript Client](https://github.com/ashishbhintade/cntsc) by [ashishbhintade](https://github.com/ashishbhintade). The original project is licensed under MIT, and this fork includes additional features and updates.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Installation

Use following command to use library in your project:

```bash
npm install @stardust-gg/ts-celestial-sdk
```

## Quick Start

To use this library, you'll first need to initiate your own Celestia node and generate an authentication token. You need node url and the auth token to instantiate the Client. Here is the guide on [how to run the Celestia light node](https://docs.celestia.org/nodes/light-node).

```ts
import Client from 'ts-celestia-sdk';

let client: Client = new Client('YOUR_NODE_URL', 'AUTH_TOKEN');

await client.Blob.GetAll(42, ['AAAAAAAAAAAAAAAAAAAAAAAAAAECAwQFBgcICRA=']);
```

## Supported Enpoints

- Blob
- DAS
- Fraud
- Header
- Node
- P2P
- Share
- State
