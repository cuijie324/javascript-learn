export let name = 'cc';

export function setName (newName) {
    name = newName;
}

export let obj = {
    name: 'obj'
}

export function setNewObj (newObj) {
    obj = newObj;
}

export { name as myName }
