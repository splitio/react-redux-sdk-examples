import { SplitFactory } from '@splitsoftware/splitio'; 

const factory = SplitFactory({
  core: {
    authorizationKey: '<your-api-key>',
    key: '<example-user-key>',
    // Traffic type setup is optional, delete following line if you don't want that.
    trafficType: 'user'
  }
});

// Create and expose the two clients.
export const userClient = factory.client();
export const accountClient = factory.client('<example-account-key>', 'account'); 
