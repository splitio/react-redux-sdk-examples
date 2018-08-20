import { SplitFactory } from '@splitsoftware/splitio'; 

const factory = SplitFactory({
  core: {
    authorizationKey: '<your-auth-key>',
    key: '<your-key>',
    // Traffic type setup is optional, delete following line if you don't want that.
    trafficType: '<your-traffic-type>'
  },
  scheduler: {
    impressionsRefreshRate: 10
  }
});

export const splitClient = factory.client();

splitClient.on(splitClient.Event.SDK_READY, () => {
  // You can instantiate a new client. Traffic type setup is optional here too.
  const client2 = factory.client('<different-user-key>', '<different-traffic-type>'); 
  // Do whatever with that client.
  console.log(client2.getTreatment('<your-feature>'));
});
