
## About the project

I tried to explore how a `payment wallets/ digital wallets` work, I also tried to see what are the challenges that one might face while creating an application that involves transactions of money or sensitive information in general.

One significant learning experience involved database operations.  I discovered that in MongoDB, when an operation is in progress on a row and another query manipulates the same row concurrently, the transaction is rolled back to maintain data integrity. But in PostgreSQL it does not, we have to Lock the row to ensure that we do not get interrupted by any other query. This was one such learning and I discovered many other things as well.

This is the architecture for this project (It does not include the User flow, I mostly spent time on learing how I would simulate backend):

<img src="/docs/architecture.png" alt="architecture image"/>

The project contains includes the following packages/apps:

### Apps and Packages

- `user-app`: a [Next.js](https://nextjs.org/) app that is the main application handing the UI, routing, transacton management, authentication.
- `webhook-server`: a [Node.js]() app Written in `TypeScript` and `express` for handing Transaction Verification from bank
- `@repo/ui`: a React component library that is used in `user-app` and could be used in another `Next.js` application
- `@repo/db`: a prisma configuation for database that is used in `user-app` and `webhook-server`
- `@repo/store`: a configuration for `react-recoil` state management library
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Tech Stack of the Project
- Turborepo (for package and app management)
- NextJs (app router/ server side rendering)
- NodeJs (express for Rest Api)
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM 
- NextJs Authentication
- SQL Transaction and Locks

### Features Available
- User authentication
- on Ramp Transaction : putting money into your wallet from your bank account
- Web Hook server : A separate service other than main backend to handle the Payment verification service
- Atomic transactions 
- P2P (Peer to Peer / User to User) transaction.

### Future Implementations
- Off Ramp Transaction: Due to its critical nature, I am considering implementing this feature on a separate server. Alternatively, it might be integrated into the existing webhook service.
- Might implement Queue to handle the requests
- Banking API: Currently, I simulate the banking API using 'Postman`. It would be beneficial to have a public or open-source banking simulation available for such projects. I may explore creating one.
- Competing UI: will see about that :)
