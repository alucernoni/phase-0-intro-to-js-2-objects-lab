// Write your solution in this file!

const employee = {
    name: 'Jared Leto',
    streetAddress: '420 Hollywood Blvd'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj};
    delete newObj.name;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj.name;
    return obj;
}