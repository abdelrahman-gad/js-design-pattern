// design pattern 
// Single Responsibility Principle
console.log('script works successfully');
class CalorieTracker{
    constructor(maxCalories){
       this.maxCalories=maxCalories;
       this.currentCaloreis=0;
    }


    trackCalories(calorieCount) {
        this.currentCaloreis +=calorieCount;
        if(this.currentCaloreis>this.maxCalories){
            this.logCalorieSurPlus();
        }
    }

    logCalorieSurPlus(){
        console.log('Calories succeeded max Calories');
    }

}

const calorieTracker = new CalorieTracker(400);
calorieTracker.trackCalories(200);
calorieTracker.trackCalories(100);
calorieTracker.trackCalories(200);
