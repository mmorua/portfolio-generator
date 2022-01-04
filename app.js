const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Notice the lack of parentheses around the profileDataArr parameter
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
};
console.log('================');
// Is the same as this... Notice the lack of parentheses around the profileItem parameter
profileDataArr.forEach(profileItem => console.log(profileItem));







printProfileData(profileDataArgs)