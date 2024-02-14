import { servicesList } from "./data";

export async function getServicesList() {
  servicesList.map(addFieldChidrens)
  return ;
}

function addFieldChidrens(service) {
  return {
    childrens: createChildrens(service),
    id: service.id,
    head: service.head,
    name: service.name,
    node: service.node,
    price: service.price,
    sorthead: service.sorthead,
    
  };
}

function createChildrens(service) {
  return (
    servicesList.map((item) =>{
      if(item.head === service.id){
      return item
    }
    }) 
  );
}
