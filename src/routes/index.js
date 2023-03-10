import config from '../config';

import HeaderSidebar from '../layouts/HeaderSidebar';

// Pages
import Home from '../pages/Home';
import LivingRoom from '../pages/LivingRoom';
import DiningRoom from '../pages/DiningRoom';
import Bedroom from '../pages/Bedroom';
import WorkRoom from '../pages/WorkRoom';
import Kitchen from '../pages/Kitchen';
import Decoration from '../pages/Decoration';
import News from '../pages/News';
import Contact from '../pages/Contact';

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.livingroom, component: LivingRoom, layout: HeaderSidebar },
  { path: config.routes.diningroom, component: DiningRoom, layout: HeaderSidebar },
  { path: config.routes.bedroom, component: Bedroom, layout: HeaderSidebar },
  { path: config.routes.workroom, component: WorkRoom, layout: HeaderSidebar },
  { path: config.routes.kitchen, component: Kitchen, layout: HeaderSidebar },
  { path: config.routes.decoration, component: Decoration, layout: HeaderSidebar },
  { path: config.routes.news, component: News },
  { path: config.routes.contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
