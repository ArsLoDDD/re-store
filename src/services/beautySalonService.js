export default class BeautySalonService {
  data = [
    {
      id: 1,
      title: "Beauty",
      description: "test time frst ",
      price: "30$",
      image:
        "https://i.ibb.co/tMJfVKc/245014401-405380307911084-7273405892058962671-n.jpg",
    },
    {
      id: 2,
      title: "Beauty",
      description: "test time second",
      price: "50$",
      image:
        "https://i.ibb.co/tMJfVKc/245014401-405380307911084-7273405892058962671-n.jpg",
    },
    {
      id: 3,
      title: "Beauty",
      description: "test time 1111",
      price: "110$",
      image:
        "https://i.ibb.co/tMJfVKc/245014401-405380307911084-7273405892058962671-n.jpg",
    },
  ];
  getBeauty() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 800);
    });
  }
}