import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";
import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({url}) => url.pathname.startsWith(''),
  new NetworkFirst()
);