const config = {
  routes: {
    home: "/",
    products: "/products",
    productDetail: "/products/:slug",
    notfound: "*",
    register: "/register",
    login: "/login",
    account: "/account",
    policySection: "/policySection",
    news: "/news",
  },
  accountRoutes: {
    loyalty: "/account",
    info: "/account/info/p/:username",
    orders: "/account/orders",
    wishlist: "/account/wishlist",
    addresses: "/account/addresses",
    coupons: "/account/coupons",
  },
  blogsRoutes: {
    setupDecor: "/blogs/setup-decor",
    technology: "/blogs/technology",
  },
  seeMoreRoutes: {
    introduce: "/seeMore/introduce",
    affiliate: "/seeMore/affiliate",
    recruitment: "/recruitment",
    parTimeJobs: "/parTimeJobs",
    Showcase: "/seeMore/Showcase",
  },
  jobDetailRoutes: {
    affiliateOperation: "/affiliateOperation",
    contentCreator: "/contentCreator",
    graphicDesigner: "/graphicDesigner",
    marketingExecutive: "/marketingExecutive",
    partTimeCustomerService: "/partTimeCustomerService",
    customerService: "/customerService",
    marketingExecutiveIntern: "/marketingExecutiveIntern",
  },
  policyRoutes: {
    loyaltyProgram: "/loyaltyProgram",
    preOrderPolicy: "/preOrderPolicy",
    returnPolicy: "/returnPolicy",
  },
  newPost: {
    EYESmartcase: "news/EYESmartcase",
    kingrowK1: "news/kingrowK1",
    smartEInkTablet: "news/smartEInkTablet",
    narwalRobot: "news/narwalRobot",
    rainShoeCover: "news/rainShoeCover",
    diceGlowFeature: "news/diceGlowFeature",
    leatherCareTips: "news/leatherCareTips",
  },
};

export default config;
