const convertToObject = (array, idFieldName = 'id') =>
  array.reduce((acc, item) => {
    acc[item[idFieldName]] = item.value;
    return acc;
  }, {});

const convertToArray = (data, idFieldName = 'id') =>
  Object.keys(data).reduce((acc, key) => {
    acc.push({ [idFieldName]: key, value: data[key] });
    return acc;
  }, []);

  const formFields = [
  { id: 'login', value: 'john.doe' },
  { id: 'password', value: 'secret' }
]

const formData = convertToObject(formFields, 'id')

/**
 * {
 *   login: 'john.doe',
 *   password: 'secret'
 * }
 */
console.log(formData)

const backConverted = convertToArray(formData, 'name')

/**
  * [
  *   { name: 'login', value: 'john.doe' },
  *   { name: 'password', value: 'secret' }
  * ]
 */
console.log(backConverted)