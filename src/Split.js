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
const client2 = factory.client('<different-user-key>', '<different-traffic-type>'); // Traffic type setup is optional.

  console.log(client2.getTreatment('advanced_editor'));
});
