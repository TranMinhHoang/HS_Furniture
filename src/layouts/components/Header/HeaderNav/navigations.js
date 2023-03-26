import config from 'config';

const navigations = [
  {
    name: 'Trang chủ',
    path: config.routes.home,
  },
  {
    name: 'Phòng khách',
    path: config.routes.livingroom,
    children: [
      {
        name: 'Ghế ngồi',
        path: config.routes.chair,
      },
      {
        name: 'Tủ, kệ ti vi',
        path: config.routes.cabinet,
      },
    ],
  },
  {
    name: 'Phòng ăn',
    path: config.routes.diningroom,
  },
  {
    name: 'Phòng ngủ',
    path: config.routes.bedroom,
  },
  {
    name: 'Phòng làm việc',
    path: config.routes.workroom,
  },
  {
    name: 'Bếp',
    path: config.routes.kitchen,
  },
  {
    name: 'Đồ trang trí',
    path: config.routes.decoration,
  },
  {
    name: 'Tin tức',
    path: config.routes.news,
  },
  {
    name: 'Liên hệ',
    path: config.routes.contact,
  },
];

export default navigations;
