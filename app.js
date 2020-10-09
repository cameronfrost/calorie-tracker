// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 1, name: 'Steak Dinner', calories: 1200},
      {id: 2, name: 'Cookie', calories: 400},
      {id: 3, name: 'Eggs', calories: 300},
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    logData: function(){
      return data;
    }
  }
})();

// UI Controller
const UICtrl = (function() {
  
})();

// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl) {
  
})(ItemCtrl, UICtrl);