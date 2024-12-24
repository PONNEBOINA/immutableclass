import './App.css'

const App = () => {
  const ImmutableEmployee = ({name, id, dateOfJoining, addresses}) => {
    const deepFreeze = obj => {
      Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          deepFreeze(obj[key])
        }
      })
      return Object.freeze(obj)
    }

    return deepFreeze({
      name,
      id,
      dateOfJoining: new Date(dateOfJoining),
      addresses: addresses.map(address => deepFreeze({...address})),
    })
  }

  const employee = ImmutableEmployee({
    name: 'Ponneboina',
    id: 'EMP123',
    dateOfJoining: '2024-01-01',
    addresses: [
      {street: '123 street', city: 'HYD', zip: '12345'},
      {street: '456 street', city: 'MUM', zip: '67890'},
    ],
  })

  console.log(employee)

  employee.name = 'vamshi' // NAME WONT CHANGE

  employee.addresses[0].city = 'DEL' // Not allowed
}

export default App
