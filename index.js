// design pattern 
// Single Responsibility Principle
// console.log('script works successfully');
import logMessage from './logger.js';
class CalorieTracker{
    constructor(maxCalories){
       this.maxCalories=maxCalories;
       this.currentCaloreis=0;
    }


    trackCalories(calorieCount) {
        this.currentCaloreis += calorieCount;
        if(this.currentCaloreis>this.maxCalories){
            logMessage('Too much clories ');
        }
    }

    

}
console.log('script is ok');

const calorieTracker = new CalorieTracker(400);
calorieTracker.trackCalories(200);
calorieTracker.trackCalories(100);
// calorieTracker.trackCalories(200);
