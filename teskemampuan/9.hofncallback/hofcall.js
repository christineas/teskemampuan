function grupBuah(buah, callback) {
    const grouped = {};
    buah.forEach(item => {
      const key = callback(item);
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(item);
    });
    return grouped;
  }
  
  // Contoh penggunaan
  const fruits = [
    { name: 'Melon', type: 'Fruit' },
    { name: 'DragonFruit', type: 'Fruit' },
    { name: 'Tomato', type: 'Vegetable' },
    { name: 'Banana', type: 'Fruit' },
    { name: 'Potato', type: 'Vegetable' },
    { name: 'Mushroom', type: 'Vegetable' },
    { name: 'Brocoli', type: 'Vegetable' },
    { name: 'Cherry', type: 'Fruit' }
  ];
  
  const grupJenis = grupBuah(fruits, fruit => fruit.type);
  console.log(grupJenis);