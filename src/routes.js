import create from "./components/create.vue";
import customersinfo from "./components/customersinfo.vue";
import editcustomer from "./components/editcustomer.vue";

const routes = [
  { path: "/create", component: create, name: "create" },
  { path: "/customersinfo", component: customersinfo, name: "customersinfo" },
  { path: "/editcustomer", component: editcustomer, name: "editcustomer" }
];

export default routes;
