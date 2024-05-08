// check whether 2 objects are equal

function isEquivalent(a, b){
    const aProp = Object.getOwnPropertyNames(a);
    const bProp = Object.getOwnPropertyNames(b);

    if(aProp.length != bProp.length){
        return false;
    }

    for(var i = 0; i < aProp.length; i++){
        var propName = aProp[i];
        if(a[propName] !== b[propName]){
            return false;
        }
    }

    return true
}

const result = isEquivalent({"hi" : 12}, {"hi" : 12});

console.log(result);