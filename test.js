
function convertToObject(arr, field)
{
let result =  {};
arr.map(e => {
result[e.id] = e.value
});
return result;
}
const formFields = [
  { id: 'login', value: 'john.doe' },
  { id: 'password', value: 'secret' }
]

const formData = convertToObject(formFields, 'id')
console.log('formData', formData);
function convertToArray(obj, field){
   Object.entries(obj).map([key, value]) => ({
    [field] : key,m
   })
}
const backConverted = convertToArray(formData, 'name')
console.log(backConverted)