// Opdracht 4A

// function GetTvBrandNameType(inventory) {
//  return inventory.brand + inventory.type + inventory.name;
// }
// const BrandNameType = GetTvBrandNameType[2];
// console.log (BrandNameType);

const BrandNameType = inventory.map ((inventory) => {
  return (inventory.brand, inventory.type, inventory.name)
})
console.log(BrandNameType)